import "./RecentBlog.css";

import { Subheading } from "../../components";
import images from "../../constants/images";

const RecentBlog = () => {
  return (
    <div className="app__recentBlog">
      <Subheading title="Recent Blog" />
      <div className="app__recentBlog-container">
        <div className="app__recentBlog-container_item">
          <img src={images.blog1} alt="blog-image" />
          <div className="app__recentBlog-container_item-text">
            <h3>First Time Home Owner Ideas</h3>
            <p>by Nana Ama on Dec 14th, 2023</p>
            <p>Read More</p>
          </div>
        </div>
        <div className="app__recentBlog-container_item">
          <img src={images.blog2} alt="blog-image" />
          <div className="app__recentBlog-container_item-text">
            <h3>First Time Home Owner Ideas</h3>
            <p>by Nana Ama on Dec 14th, 2023</p>
            <p>Read More</p>
          </div>
        </div>
        <div className="app__recentBlog-container_item">
          <img src={images.blog3} alt="blog-image" />
          <div className="app__recentBlog-container_item-text">
            <h3>First Time Home Owner Ideas</h3>
            <p>by Nana Ama on Dec 14th, 2023</p>
            <p>Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
