from dataclasses import dataclass
import datetime


@dataclass
class Testimonial:
    person_name: str
    where: str
    date: datetime
    paragraph: list[str]
    linkedin_profile_link: str
    