from Domain.entities.project import Project

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