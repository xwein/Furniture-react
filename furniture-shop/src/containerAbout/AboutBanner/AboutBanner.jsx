import "./AboutBanner.css";
import images from "../../constants/images";

function AboutBanner() {
  return (
    <div className="app__aboutBanner">
      <div className="app__aboutBanner-text">
        <h1>UP TO 40% OFF</h1>
        <h2>Modern furniture</h2>
      </div>
      <button className="custom__button">Shop Now</button>
      <img src={images.aboutBanner} alt="banner-img" />
    </div>
  );
}

export default AboutBanner;
