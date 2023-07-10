

from dataclasses import dataclass


@dataclass
class Experience:
    title: str
    paragraph: list[str]
    front_tech_thumb_link: list[str]
    back_tech_thumb_link: list[str]
    