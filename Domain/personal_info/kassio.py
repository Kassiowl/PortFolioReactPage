from ..entities.about_me import AboutMe
from ..entities.experiences import Experience
from ..entities.project import Project
from ..entities.testimonial import Testimonial

class Kassio:
    def get_about_me():
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
        return about_me

    def get_experiences():     
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
        return [sedes_experience]
    
    def get_projects():

        project_1_p1 =  """
                            A simple web Application made with React in Front-End and
                            Node no Back-end, made to learn React. This application use
                            mongodb as database, has authentication and C.R.U.D
                            operations, capable of registering new users, store password in
                            bcrypt hash, using http cat api(HTTP CAT) to display image
                            according to user input and random user api(Random User
                            Generator)) to display a list of random users
                        """
        
        project_1_p_list = [project_1_p1]
        project_1 = Project('RNMonCrud', project_1_p_list, 'NonLink', 'https://github.com/Kassiowl/RNMonCrud')

        project_2_p1 =  """
                            A web application made with django + react in clean
                            architecture, the application receive a form from the user and
                            generate a qr code with that information, creating button links
                            to the user’s linkedin and github
                        """

        project_2_p_list = [project_2_p1]


        project_2 = Project("QrCodeDisplayDataPub", project_2_p_list, 'NonLink', 'https://github.com/Kassiowl/QrCodeDisplayDataPub')

        project_3_p1 =  """
                            A simple application capable of connecting one of the most
                            popular enterprise knowledge repositories solutions (notion) to
                            the google sheets
                        """    
        
        project_3_p_list = [project_3_p1]
        project_3 = Project('NOTION-CONNECT-TO-SHEET', project_3_p_list, 'NonLink', 'https://github.com/Kassiowl/NOTION-CONNECT-TO-SHEET')

        project_4_p1 =  """
                            Project of this page, made it with React in front and python in the back-end,
                            using hexagonal architecture, as it is some as simple as getting info from the back-end
                            and displaying in the from, this project has a well made, careful and characteristic design,
                            using many features of css as well as animations
                        """

        project_4_p_list = [project_4_p1]
        project_4 = Project("Portfolio Page", project_4_p_list, 'NonLink', 'https://github.com/Kassiowl/PortFolioReactPage')

        return [project_1, project_2, project_3, project_4]

    def get_testimonials():
        return None
