import "./BlogPage.css";
import blogData from "./BlogData";
import React, { useState } from "react";
import images from "../../constants/images";

const BlogPage = () => {
  const postsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const visiblePosts = blogData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(blogData.length / postsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="app__blogPage">
      <div className="app__aboutHeader-intro">
        <h1>Blogs</h1>
        <p>
          We display products based on the latest items we have. If you want to
          see our older products, please enter the name of the item.
        </p>
      </div>

      <div className="app__blogPage-container">
        <div className="app__blogPage_blog-posts-container">
          {visiblePosts.map((post) => (
            <div key={post.id} className="app__blogPage-post">
              <img src={post.image} alt={`Image for ${post.title}`} />
              <div className="app__blogPage-post_wrapper">
                <p>{post.date}</p>
                <p>{post.category}</p>
                <p>{post.author}</p>
              </div>
              <div className="app__blogPage-post_main-content">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="app__blogPage_search-bar">
          <form action="#" method="get">
            <input
              type="text"

              name="search"
              placeholder="Type your search here..."
            />
            <img src={images.searchIcon} type="submit" id="search" />
          </form>
          <div className="app__blogPage_search-bar_content">
            <h2>Recent Posts</h2>
            <div className="app__blogPage_search-bar_content-recent">
              <h3>Creating a Stylish and Productive Home Office Space</h3>
              <img src={images.blogPost6} alt="blog-post" />
              <p>
                Transform your home office into a stylish and productive
                workspace. Explore chic desk designs, comfortable yet elegant
                chairs, and smart storage solutions...
              </p>
            </div>
            <div className="app__blogPage_search-bar_content-tags">
              <h2>Tags</h2>
              <p>Newest</p>
              <p>Bedroom</p>
              <p>Outdoor</p>
              <p>Stylish</p>
              <p>Dining Room</p>
              <p>Modern</p>
            </div>
            
          </div>
        </div>
      </div>

      <div className="app__blogPage-pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <p>{`Page ${currentPage} of ${totalPages}`}</p>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
