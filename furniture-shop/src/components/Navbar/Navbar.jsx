import images from "../../constants/images";
import { IoPersonOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";

import "./Navbar.css";

const Navbar = () => {
  
    return (
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="app-logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#about">About</a>
          </li>
          <li className="p__opensans">
            <a href="#menu">Shop</a>
          </li>
          <li className="p__opensans">
            <a href="#awards">Blog</a>
          </li>
          <li className="p__opensans">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="app__navbar-icons">
        <IoPersonOutline />
        <MdFavoriteBorder />
        <BsCart3 />
        </div>
        
      </nav>
    );
  };
  
  export default Navbar;