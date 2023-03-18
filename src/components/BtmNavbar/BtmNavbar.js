// import "./CustomStyles.css";
import "./BtmNavbarStyles.css";
import logo from "./logo.png"


const BtmNavbar = () => {
    return (

        <>
        <header>
            <div className="info-section">
                <img className="logo" id="logo" src={logo} alt="logo"/>
                
                <p>
                    <div className="bold">Trippy Travels</div> 
                    Start your travelling odessy Because a web<br/>
                     can be viewed through displays of differing screen<br/>
                     content on the web page can suffer from those <br/>
                    To avoid this problem, CSS offers two properties<br/>
                    how narrow or how wide an elements box can be<br/>
                </p>
            </div>
            

            <nav>
                <ul className="nav__links">
                    <li><a href="./">Feed</a></li>
                    <li><a href="./">Testimonies</a></li>
                    <li><a href="./">Locations</a></li>
                    <li><a className="cta" href="./"><button>Contact</button></a></li>

                </ul>
                
                
            </nav>
           {/* <a className="cta" href="./"><button>Contact</button></a> */}
           
        </header>
        <p className="copyright">Copyright 2023 | Jaded</p>
        </>
    )
}

export default BtmNavbar