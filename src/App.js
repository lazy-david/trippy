import Navbar from './components/Navbar';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import BtmNavbar from './components/BtmNavbar/BtmNavbar';
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Outlet/>
      <Header />
      <br />
      <br/>


      <Body />
      <BtmNavbar />

    </div>
  );
}

export default App;
