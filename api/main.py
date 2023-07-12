

from fastapi import FastAPI

from repo.personal_info.kassio import Kassio
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


from fastapi_cache import FastAPICache
from fastapi_cache.backends.redis import RedisBackend
from fastapi_cache.decorator import cache

from redis import asyncio as aioredis


origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@cache()
async def get_cache():
    kassio = Kassio()
    return {
                "about_me": kassio.about_me,
                "experiences": kassio.experiences,
                "projects": kassio.projects,
                "testimonials": kassio.testimonials
           }


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/kassio")
@cache(expire=3600)
def read_root():
    kassio = Kassio()
    return {
                "about_me": kassio.about_me,
                "experiences": kassio.experiences,
                "projects": kassio.projects,
                "testimonials": kassio.testimonials
           }



@app.on_event("startup")
async def startup():
    redis = aioredis.from_url("redis://localhost")
    FastAPICache.init(RedisBackend(redis), prefix="fastapi-cache")