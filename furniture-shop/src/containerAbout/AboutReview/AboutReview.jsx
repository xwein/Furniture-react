import "./AboutReview.css";
import { Subheading } from "../../components";
import images from "../../constants/images";

function AboutReview() {
  return (
    <div className="app__aboutReview">
      <Subheading title="Our Customers Are Saying" />
      <div className="app__aboutReview-container">
        <div className="app__aboutReview-container_card">
          <img src={images.aboutReview} alt="about-review" />
          <h2>The results given are very satisfying</h2>
          <p>
            “I love the unique and stylish furniture designs available on this
            website. They offer a refreshing change from the bland and generic
            options available at most furniture stores..”
          </p>
          <div className="app__aboutReview-container_card-wrapper">
            <img src={images.aboutReview1} alt="client-photo" />
            <div className="app__aboutReview-container_card-wrapper_text">
              <p>Michelle Anna</p>
              <p>Product Manager</p>
            </div>
          </div>
        </div>
        <div className="app__aboutReview-container_card">
          <img src={images.aboutReview} alt="about-review" />
          <h2>The service provided is very good and friendly</h2>
          <p>
            “I love the unique and stylish furniture designs available on this
            website. They offer a refreshing change from the bland and generic
            options available at most furniture stores..”
          </p>
          <div className="app__aboutReview-container_card-wrapper">
            <img src={images.aboutReview2} alt="client-photo" />
            <div className="app__aboutReview-container_card-wrapper_text">
              <p>Lissa Embards</p>
              <p>Housewife</p>
            </div>
          </div>
        </div>
      </div>
      <div className="app__brandLogo-container">
        <img src={images.brandLogo} alt="brand-logo" />
      </div>
    </div>
  );
}

export default AboutReview;
