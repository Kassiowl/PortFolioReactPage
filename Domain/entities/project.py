from dataclasses import dataclass


@dataclass
class Project:
    name: str
    paragraph: list[str]
    project_thumb_link: str 
    github_project_link: str
    