import "./Banner.css";
import images from "../../constants/images";

const Banner = () => (
  <div className="app__banner">
    <div className="app__banner-item">
      <img src={images.banner1} alt="banner-image" />
      <div className="app__banner-item_content">
        <h2>Comfortable Chair</h2>
        <p>
          This versatile chair is perfect for those who work all day or
          entertain at home. Its curved ergonomic design provides maximum
          comfort.
        </p>
        <p className="app__banner-item_content-p">Shop Now</p>
      </div>
    </div>
    <div className="app__banner-item">
      <div className="app__banner-item_content">
        <h2>Hanging Lights</h2>
        <p>
          This elegant, multi-functional dining chair features a black
          powder-coated steel frame and a plush breathable cushion for added
          comfort.
        </p>
        <p className="app__banner-item_content-p">Shop Now</p>
      </div>

      <img src={images.banner2} alt="banner-image" />
    </div>
  </div>
);

export default Banner;
