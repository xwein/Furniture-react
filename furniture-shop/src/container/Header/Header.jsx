import "./Header.css";
import { HiArrowLeftCircle,HiArrowRightCircle  } from "react-icons/hi2";
const Header = () => (
  <div className="app__header">
    <div className="app__header-content">
      <h1>Creative Home Simplify Your Furniture</h1>
      <button className="custom__button">Shop Now</button>
    </div>
    <div className="app__header-arrows">
      <HiArrowLeftCircle  className="header__arrow-icon" />
      <HiArrowRightCircle className="header__arrow-icon"/>
    </div>
  </div>
);

export default Header;
