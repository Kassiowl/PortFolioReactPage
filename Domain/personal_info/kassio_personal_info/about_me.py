from Domain.entities.about_me import AboutMe


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
