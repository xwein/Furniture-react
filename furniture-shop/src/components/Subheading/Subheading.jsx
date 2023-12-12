import "./Subheading.css"
import images from "../../constants/images";


const Subheading = ({title}) => (
    <div className="container">
     <img src={images.line} alt="img-line" />
      <p>{title}</p>
      <img src={images.line} alt="img-line" />
    </div>
  );
  
  export default Subheading;