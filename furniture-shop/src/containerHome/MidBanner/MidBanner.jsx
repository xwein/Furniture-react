import "./MidBanner.css";

import images from "../../constants/images";

const MidBanner = () => {
  return (
    <div className="app__midBanner">
      <div className="app__midBanner-image_container">
        <img src={images.midBanner} alt="middle-banner" />
      </div>
      <div className="app__midBanner-content_container">
        <h2>Match Furniture Styles</h2>
        <p>
          Elevate your space with perfectly matched furniture styles. Discover
          harmony in design for a home that reflects your unique taste.
        </p>
        <button className="custom__button" type="button">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default MidBanner;
