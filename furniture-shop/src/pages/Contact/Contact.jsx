import images from "../../constants/images";
import './Contact.css'

const socialIcons = [
  images.contactFacebook,
  images.contactTwitter,
  images.contactInstagram,
  images.contactWhatsapp,
  images.contactLinkedin,
];

function Contact() {
  return (
    <div className="app__contact">
      <div className="app__aboutHeader-intro">
        <h1>Contact</h1>
        <p>
          We display products based on the latest items we have. If you want to
          see our older products, please enter the name of the item.
        </p>
      </div>
      <div className="app__contact-container">
        <div className="app__contact-container_form">
          <h2>Get a quote</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Subject:
              <input type="text" name="subject" />
            </label>
            <label>
              Phone:
              <input type="text" name="phone" />
            </label>
            <label id="message">
              Message:
              <input type="text" name="message"  />
            </label>
          </form>
          <button className="custom__button">Send Now</button>
        </div>
        <div className="app__contact-container_links">
          <div className="app__contact-container_links-wrapper">
            <img src={images.contactPhone} alt="contact-phone" />
            <p>123-456-789</p>
          </div>
          <div className="app__contact-container_links-wrapper">
            <img src={images.contactMail} alt="contact-mail" />
            <p>info@furniture.com</p>
          </div>
          <div className="app__contact-container_links-wrapper">
            <img src={images.contactSite} alt="contact-site" />
            <p>www.furnitures.com</p>
          </div>
          <div className="app__contact-container_links-wrapper_icons">
            {socialIcons.map((image, index) => (
              <img
                key={`social-icon-${index + 1}`}
                src={image}
                alt={`social_icon${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
