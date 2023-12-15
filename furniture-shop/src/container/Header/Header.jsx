import "./Header.css";
import React, { useState } from "react";
import images from "../../constants/images";
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";

const Header = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const imagesArray = [images.header, images.header1, images.header2];

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : imagesArray.length - 1
      );
    } else if (direction === "right") {
      setImageIndex((prevIndex) =>
        prevIndex < imagesArray.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  return (
    <div
      className="app__header"
      style={{ backgroundImage: `url(${imagesArray[imageIndex]})` }}
    >
      <div className="app__header-content">
        <h1>Creative Home Simplify Your Furniture</h1>
        <button className="custom__button">Shop Now</button>
      </div>
      <div className="app__header-arrows">
        <HiArrowLeftCircle
          className="header__arrow-icon"
          onClick={() => handleArrowClick("left")}
        />
        <HiArrowRightCircle
          className="header__arrow-icon"
          onClick={() => handleArrowClick("right")}
        />
      </div>
    </div>
  );
};

export default Header;
