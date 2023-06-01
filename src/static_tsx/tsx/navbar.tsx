import "../css/navbar.css"
import logo from '../../logo.svg';

function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <img src={logo} alt="logo" width={"150px"} height={"50px"}/>
                <li>
                    Primeiro Link
                </li>
                <li>
                    Segundo Link
                </li>
                <li>
                    Terceiro Link
                </li>
                <li>
                    Quarto Link
                </li>
            </nav>
        </div>
      );
  }
  
  export default NavBar;
  