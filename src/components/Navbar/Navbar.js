// import "./CustomStyles.css";
import "./NavbarStyles.css";
import logo from "./logo.png"


const Navbar = () => {
    return (
        <header>
            <img className="logo" id="logo" src={logo} alt="logo"/>
            <p>Trippy</p>
            <nav>
                <ul className="nav__links">
                    <li><a href="./">Services</a></li>
                    <li><a href="./">Locations</a></li>
                    <li><a href="./">About</a></li>
                    <li><a className="cta" href="./"><button>Contact</button></a></li>

                </ul>
                
            </nav>
           {/* <a className="cta" href="./"><button>Contact</button></a> */}
        </header>
    )
}

export default Navbar