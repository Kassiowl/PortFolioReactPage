from ..entities.about_me import AboutMe
from ..entities.experiences import Experience
from ..entities.project import Project
from ..entities.testimonial import Testimonial

class Kassio:
    about_me_p1 =   """
                        My name is Kassio Wallace, and i'm a programmer passionate to solve problems, 
                        specially low level ones, for some time, i did web software projects, 
                        learning back-end tecnologies like django and front-end tecnologies like React 
                    """
    about_me_p2 =   """
                        i studied and still study software architecture, 
                        with the purpose to create scalable and long-run easy-to-maintain software, 
                        lately, i start to study computer graphics programming as it's one of my biggest will to learn and 
                        understand low-level programming and concepts.
                    """
    paragraphs = [about_me_p1, about_me_p2]

    about_me = AboutMe('About Me',paragraphs)

    sedes_experience_p1 =       """
                                    A form based software with complex business rules, validation
                                    and huge feedback capabilities to the users. The form validates a
                                    series of rules where the values allowed on the fields depend on
                                    each other. The form supports bidirectional feedback meaning
                                    that any field can invalidate the other, no matter the order
                                    they’ve been filled. Using MVC django web framework, Python and the classic web
                                    stack (HTML, CSS and Javascript
                                """
    
    sedes_experience_p2 =       "Agile development and version control using gitlab"

    sedes_experience_p3 =       """
                                    Leadership in a small and beginner-level development team,
                                    meeting with stakeholders, translating software requirements
                                    and ticket creation with task delegation
                                """
    
    sedes_p_list = [sedes_experience_p1, sedes_experience_p2, sedes_experience_p3]

    javascript_thumb = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'
    html_thumb = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
    css_thumb = "https://logospng.org/download/css-3/logo-css-3-2048.png"

    front_thumb_list = [javascript_thumb, html_thumb, css_thumb]

    django_thumb = 'https://icon-library.com/images/django-icon/django-icon-0.jpg'
    python_thumb = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2048px-Python.svg.png'

    back_thumb_list = [django_thumb, python_thumb]

    sedes_experience = Experience('SEDES - Intern Developer', sedes_p_list, front_thumb_list, back_thumb_list)

    
