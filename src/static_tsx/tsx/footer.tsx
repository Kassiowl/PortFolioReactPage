import "../css/footer.css"
import Linkedin from "../social_media_icons/linkedin.png"
import Github from "../social_media_icons/github.png"
import Medium from "../social_media_icons/medium.png"
import Python from "../tecnology_stacks_icons/python.png"
import Django from "../tecnology_stacks_icons/django.png"
import Aws from "../tecnology_stacks_icons/aws.png"
import { Link, BrowserRouter } from 'react-router-dom';

function Footer() {
    return (
            <footer classNameName="footer">
                <div classNameName="social-media">
                    <h3>Social media</h3>
                    <div classNameName="icon-container">
                        <BrowserRouter>
                        <div classNameName="icon">
                            <Link to={"https://www.linkedin.com/in/kassiowallace/"} target="_blank">
                                <img src={Linkedin} alt="linkedin" width={"70px"} height={"70px"}/>
                            </Link>
                        </div>
                        <div classNameName="icon">
                            <Link to={"https://medium.com/@kassiowl34"} target="_blank"> 
                                <img src={Medium} alt="medium" width={"70px"} height={"70px"}/>
                            </Link>
                        </div>
                        <div classNameName="icon">
                            <Link to={"https://github.com/Kassiowl"} target="_blank">
                                <img src={Github} alt="github" width={"70px"} height={"70px"}/>
                            </Link>
                        </div>
                        </BrowserRouter>
                    </div>
                </div>
                <div classNameName="tecnology-stacks">
                    <h3>Tecnology Stacks</h3>
                    <div classNameName="icon-container">
                        <BrowserRouter>
                            <div classNameName="icon">
                                <Link to={"https://www.python.org/"} target="_blank" >
                                    <img src={Python} alt="python" width={"70px"} height={"70px"}/>
                                </Link>
                            </div>
                            <div classNameName="icon">
                                <Link to={"https://www.djangoproject.com/"} target="_blank" >
                                    <img src={Django} alt="Django" width={"70px"} height={"70px"}/>
                                </Link>
                            </div>
                            <div classNameName="icon">
                                <Link to={"https://aws.amazon.com/pt/"} target="_blank" >
                                    <img src={Aws} alt="aws" width={"70px"} height={"70px"}/>
                                </Link>
                            </div>
                        </BrowserRouter>
                    </div>
                </div>
            </footer>
      );
  }
  
  export default Footer;