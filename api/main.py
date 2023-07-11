

from fastapi import FastAPI

from repo.personal_info.kassio import Kassio
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

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

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/kassio")
def read_root():
    kassio = Kassio()
    return {
                "about_me": kassio.about_me,
                "experiences": kassio.experiences,
                "projects": kassio.projects,
                "testimonials": kassio.testimonials
           }



