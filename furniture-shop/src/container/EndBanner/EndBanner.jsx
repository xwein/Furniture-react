import "./EndBanner.css";

import images from "../../constants/images";

const EndBanner = () => {
  return (
    <>
    <div className="app__EndBanner">
      <div className="app__EndBanner-content_container">
        <h2>Styish Minimal Chair</h2>
        <p>
        Experience comfort in sleek style with our stylish minimal chairs. Effortlessly elevate any space <br></br> with modern design and comfort in mind.
        </p>
        <button className="custom__button" type="button">
          Shop Now
        </button>
      </div>
      <div className="app__EndBanner-image_container">
        <img src={images.endBanner} alt="End-banner" />
      </div>
    </div>
    <div className="app__brandLogo-container">
        <img src={images.brandLogo} alt="brand-logo" />
    </div>
    </>
  );
};

export default EndBanner;