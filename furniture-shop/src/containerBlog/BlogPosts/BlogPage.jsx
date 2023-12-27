import "./BlogPage.css";
import blogData from "./BlogData";
import React, { useState } from "react";

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

      <div className="app__blogPage-pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
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
