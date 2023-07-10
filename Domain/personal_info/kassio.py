
from Domain.personal_info.kassio_personal_info.about_me import get_about_me
from Domain.personal_info.kassio_personal_info.experiences import get_experiences
from Domain.personal_info.kassio_personal_info.projects import get_projects
from Domain.personal_info.kassio_personal_info.testimonials import get_testimonials


class Kassio:
    about_me = get_about_me()
    experiences = get_experiences()
    projects = get_projects()
    testimonials = get_testimonials()
