import images from "../../constants/images";
import { useState, useEffect } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import {
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialFacebook,
} from "react-icons/ti";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  /* This effect handles 
  1: mobile Sidebar is closed when clicked outside of div
  2: locks scroll on page when sidebar activated */

  useEffect(() => {
    const closeSidebarOnClickOutside = (e) => {
      const isOutsideSidebar = !e.target.closest(
        ".app__navbar-smallscreen_overlay"
      );
      const isHamburgerMenu = e.target.closest(".app__navbar-icons_sidebar");

      if (toggleMenu && isOutsideSidebar && !isHamburgerMenu) {
        setToggleMenu(false);
      }
    };

    document.body.addEventListener("click", closeSidebarOnClickOutside);

    if (toggleMenu) {
      document.body.classList.add("no-scroll");
      document.documentElement.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
    }

    return () => {
      document.body.removeEventListener("click", closeSidebarOnClickOutside);
      // Remove body class when component unmounts
      document.body.classList.remove("no-scroll");
    };
  }, [toggleMenu]);

  return (
    <nav className="app__navbar">
      <GiHamburgerMenu
        onClick={() => setToggleMenu(true)}
        className="app__navbar-icons_sidebar"
      />
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app-logo" />
      </div>
      <ul className="app__navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="app__navbar-icons">
        <IoPersonOutline />
        <MdFavoriteBorder />
        <BsCart3 />
      </div>
      {toggleMenu && (
        <>
          <div
            className={`app__navbar-smallscreen_overlay ${
              toggleMenu ? "dark-overlay" : ""
            }`}
            onClick={() => setToggleMenu(false)}
          />

          <div className="app__navbar-smallscreen_overlay">
            <div className="app__navbar-smallscreen_overlay-logo">
              <img src={images.logo} alt="app-logo" />
              <RxCross1 onClick={() => setToggleMenu(false)} />
            </div>

            <ul className="app__navbar-smallscreenlinks">
              <li>
                <Link to="/home">Home</Link>
                <IoIosArrowForward />
              </li>
              <li>
                <Link to="/about">About</Link>
                <IoIosArrowForward />
              </li>
              <li>
                <Link to="/menu">Shop</Link>
                <IoIosArrowForward />
              </li>
              <li>
                <Link to="/blog">Blog</Link>
                <IoIosArrowForward />
              </li>
              <li>
                <Link to="/contact">Contact</Link>
                <IoIosArrowForward />
              </li>
            </ul>
            <div className="app__navbar-smallscreen_overlay-login">
              <p className="label">Account</p>
              <div className="app__navbar-smallscreen_overlay-login_wrapper">
                <p>Log In</p>
                <IoIosArrowForward />
              </div>
            </div>
            <div className="app__navbar-smallscreen_overlay-socials">
              <TiSocialInstagram />
              <TiSocialTwitter />
              <TiSocialFacebook />
            </div>
            <div className="app__navbar-smallscreen_overlay-policy">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Other Policies</p>
              <p>
                © Furnitura 2023. All rights reserved. All content on this
                website is the exclusive property of Furnitura. Unauthorized use
                is prohibited. For inquiries, contact our social links.
              </p>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
