import "./ServicesStyles.css";
// import img2 from "./img2.jpeg";
// import "./Assets/Images/img2.jpg"
import Navbar from "../components/Navbar";
import BtmNavbar from "../components/BtmNavbar/BtmNavbar";


function Services() {
    return (
        <div>
            <Navbar />
            <div class='image' id="services-image">
                <p class='caption'>Ready 😎 <br />
                    Explore our services
                </p>
            </div>



        {/* // <div>
        //     <img src={img2} className="img" alt="" />
        //     <h1>Trippy</h1>
        // </div> */}
        <BtmNavbar/>
        </div>
    )
}

export default Services