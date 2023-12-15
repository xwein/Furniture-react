import "./UpperFooter.css";

const UpperFooter = () => {
  return (
    <div className="app__upperFooter">
      <div className="app__upperFooter-overlay"></div>
      <div className="app__upperFooter-content">
        <h1>Subscribe Now To Get Services Best Of Us</h1>
        <p>
          We recommended you tosubscribe to our newspaper, enter your <br />email
          below to get our daily update about us.
        </p>
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email adress"
          />
          <button className="custom__button" id="subscribe__button">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default UpperFooter;
