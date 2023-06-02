import "../css/footer.css"
import Linkedin from "../social_media_icons/linkedin.png"
import Github from "../social_media_icons/github.png"
import Medium from "../social_media_icons/medium.png"
function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="social-media">
                    <h3>Social media</h3>
                    <div className="icon-container">
                        <div className="icon">
                            <img src={Linkedin} alt="linkedin" width={"100px"} height={"100px"}/>
                        </div>
                        <div className="icon">
                            <img src={Medium} alt="medium" width={"100px"} height={"100px"}/>
                        </div>
                        <div className="icon">
                            <img src={Github} alt="github" width={"100px"} height={"100px"}/>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
      );
  }
  
  export default Footer;