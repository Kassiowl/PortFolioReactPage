import "../css/navbar.css"
import Signature from '../../Signature.png';

function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <img src={Signature} alt="logo" width={"150px"} height={"50px"}/>
                <li>
                    About me
                </li>
                <li>
                    Portfolio
                </li>
                <li>
                    Testimonials
                </li>
                <li>
                    My Experiences
                </li>
                <li>
                    Highlight Projects
                </li>
                <li>
                    Contact me!
                </li>
            </nav>
        </div>
      );
  }
  
  export default NavBar;
  