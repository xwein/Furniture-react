import React from "react";
import images from "../../constants/images";
import "./AboutHeader.css";

const AboutHeader = () => {
  return (
    <div className="app__aboutHeader">
      <div className="app__aboutHeader-intro">
        <h1>About</h1>
        <p>
          We display products based on the latest items we have. If you want to
          see our older products, please enter the name of the item.
        </p>
      </div>
      <div className="app__aboutHeader-content">
        <img src={images.aboutHeader} alt="header-image" />
        <div className="app__aboutHeader-content_text">
        <h2>Our Shop</h2>
        <p>
          Furniture consists of large objects such as tables, chairs, or beds
          that are used in a room for sitting or lying on or for putting things
          on or in. Each piece of furniture in their home suited the style of
          the house. Synonyms: household goods, furnishings, fittings, house
          fittings More Synonyms of furniture. 
          <br></br>
          <br></br>
          Furniture design is a specialized
          field that combines utility and style. Furniture is considered by many
          interior designers to be one of the most significant parts of any
          interior space. It adds not only functionality and utility to a space,
          but also style and personality.
        </p>
      </div>
      </div>
      
    </div>
  );
};

export default AboutHeader;
