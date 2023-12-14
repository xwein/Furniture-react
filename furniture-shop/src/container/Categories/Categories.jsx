import "./Categories.css";
import { Subheading } from "../../components";
import images from "../../constants/images";

const categoriesImages = [
  images.category1,
  images.category2,
  images.category3,
  images.category4,
  images.category5,
  images.category6,
];

const categoryNames = ["Bed", "Chair", "Cupboard", "Lamp", "Sofa", "Table"];

const Categories = () => {
  return (
    <div className="app__categories">
      <Subheading title="Categories" />
      <div className="app__categories-images_container">
        {categoriesImages.map((image, index) => (
          <div
            className="app__categories-images_card "
            key={`category_image-${index + 1}`}
          >
            <img src={image} alt={`category_image_${index + 1}`} />
            <p>{categoryNames[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
