import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import logo from "./logo.png";



const Navbar = () => {
    return (
        <header>
            <Link to="/" ><img className="logo" id="logo" src={logo} alt="logo"/></Link>
            <p>Trippy</p>
            <nav>
                <ul className="nav__links">
                    <li><Link to ="services">Services</Link></li>
                    <li><Link to="./">Locations</Link></li>
                    <li><Link to="./">About</Link></li>
                    <li><Link className="cta" to="./"><button>Contact</button></Link></li>

                </ul>
                 
            </nav>
           {/* <a className="cta" to="./"><button>Contact</button></a> */}
        </header>
    )
}

export default Navbar