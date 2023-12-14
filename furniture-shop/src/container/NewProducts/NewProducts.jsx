import "./NewProducts.css";
import React, { useState } from "react";
import images from "../../constants/images";
import { Subheading } from "../../components";

const productImages = [
  images.newProduct,
  images.newProduct1,
  images.newProduct2,
  images.newProduct3,
  images.newProduct4,
  images.newProduct5,
  images.newProduct6,
  images.newProduct7,
];

const productNames = [
  "Bed frame Mattress Bed size Platform",
  "Couch Loveseat Sofa bed Chair",
  "Improvement section sofa",
  "Brown wooden stool Coffee table",
  "Light fixture Lighting Pendant light",
  "Chair Table Furniture Dining room",
  "Best Florist In Fort Lauderdale",
  "Chair Comfort Furniture Commode",
];

const productPrice = [
  "$100.00",
  "$87.00",
  "$95.00",
  "$80.00",
  "$50.00",
  "$125.00",
  "$55.00",
  "$80.00",
];

const NewProducts = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="app__products">
      <Subheading title="New Products" />
      <div className="app__products_container">
        {productImages.map((image, index) => (
          <div
            className="app__products-images_card "
            key={`product_image-${index + 1}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="app__products-image_container">
              <img src={image} alt={`product_image_${index + 1}`} />
              {hoveredIndex === index && (
              <div className="app__products-images_icons">
                <div>
                  <img src={images.favouriteIcon} alt="favourite-icon" />
                  <img src={images.eyeIcon} alt="eye-icon" />
                </div>
                <img src={images.addIcon} alt="add-icon" />
              </div>
              )}
            </div>
            <p>{productNames[index]}</p>
            <p className="price-tag">{productPrice[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
