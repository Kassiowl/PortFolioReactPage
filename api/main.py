

from fastapi import FastAPI

from Domain.personal_info.kassio import Kassio

app = FastAPI()


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



