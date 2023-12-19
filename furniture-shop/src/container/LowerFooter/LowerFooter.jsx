import "./LowerFooter.css";
import images from "../../constants/images";

const LowerFooter = () => {
  return (
    <div className="app__LowerFooter">
      <div className="app__LowerFooter-content">
        <div className="app__LowerFooter-content_card">
          <img src={images.whiteLogo} alt="logo-img" />
          <p>
            Furnitura offers a curated collection of stylish and functional
            furniture. Explore our diverse range to find quality pieces that
            elevate your home with comfort and sophistication.
          </p>
        </div>
        <div className="app__LowerFooter-content-wrapper">
          <div className="app__LowerFooter-content_card">
            <h3>Customer</h3>
            <p>About Us</p>
            <p>Shop</p>
            <p>Blog</p>
          </div>
          <div className="app__LowerFooter-content_card">
            <h3>Information</h3>
            <p>Contact</p>
            <p>FAQ</p>
            <p>Service</p>
          </div>
        </div>
        <div className="app__LowerFooter-content_card">
          <h3>Contact Info</h3>
          <p>2118 Thornridge Cir. Syracuse, Connecticut 35624.</p>
          <div id="app__LowerFooter-content_contact-info">
            <img src={images.phoneIcon} alt="phone-icon" />
            <p>123-456-789</p>
          </div>
          <div id="app__LowerFooter-content_contact-info">
            <img src={images.mailIcon} alt="mail-icon" />
            <p>divanogmail@furnitura.com</p>
          </div>
        </div>
      </div>
      <div className="app__lowerFooter-credentials">
        <p>@ 2023 DIVANO. All Rights Reserved Eleyas Hasan</p>
        <div className="app__lowerFooter-credentials_social-icons">
          <img src={images.facebook} alt="fb-icon" />
          <img src={images.instagram} alt="inst-icon" />
          <img src={images.linkedin} alt="linkedin-icon" />
          <img src={images.whatsapp} alt="whatsapp-icon" />
          <img src={images.twitter} alt="twitter-icon" />
        </div>
      </div>
    </div>
  );
};

export default LowerFooter;
