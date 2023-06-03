import "../css/footer.css"
import Linkedin from "../social_media_icons/linkedin.png"
import Github from "../social_media_icons/github.png"
import Medium from "../social_media_icons/medium.png"
import Python from "../tecnology_stacks_icons/python.png"
import Django from "../tecnology_stacks_icons/django.png"
import Aws from "../tecnology_stacks_icons/aws.png"

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="social-media">
                    <h3>Social media</h3>
                    <div className="icon-container">
                        <div className="icon">
                            <img src={Linkedin} alt="linkedin" width={"70px"} height={"70px"}/>
                        </div>
                        <div className="icon">
                            <img src={Medium} alt="medium" width={"70px"} height={"70px"}/>
                        </div>
                        <div className="icon">
                            <img src={Github} alt="github" width={"70px"} height={"70px"}/>
                        </div>
                    </div>
                </div>
                <div className="tecnology-stacks">
                    <h3>Tecnology Stacks</h3>
                    <div className="icon-container">
                        <div className="icon">
                            <img src={Python} alt="python" width={"70px"} height={"70px"}/>
                        </div>
                        <div className="icon">
                            <img src={Django} alt="Django" width={"70px"} height={"70px"}/>
                        </div>
                        <div className="icon">
                            <img src={Aws} alt="aws" width={"70px"} height={"70px"}/>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
      );
  }
  
  export default Footer;