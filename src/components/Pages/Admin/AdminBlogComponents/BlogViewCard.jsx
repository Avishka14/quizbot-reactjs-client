import React from "react";
import "./AdminBlog.css"; 

function BlogViewCard({ blog, onClose }) {
  if (!blog) return null; 

  return (
    <div className="admin-pop-up-overlay" onClick={onClose}>
      <div
        className="admin-pop-up-card"
        onClick={(e) => e.stopPropagation()} 
      >
        <button className="admin-pop-up-close" onClick={onClose}>
          ✕
        </button>
        <img
          src={`http://localhost:8080${blog.coverImage}`}
          alt="Article thumbnail"
          className="admin-pop-up-thumbnail"
        />
        <h2 className="admin-pop-up-title">{blog.title}</h2>
        <p className="admin-pop-up-category">{blog.category}</p>
        <p className="admin-pop-up-content">{blog.description}</p>
      </div>
    </div>
  );
}

export default BlogViewCard;
