import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const ArticleForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
 
    const userId = Cookies.get("userid");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !title || !category || !content) {
      return alert("All fields are required including image.");
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("content", content);
    formData.append("userId", userId);

    try {
       await axios.post("http://localhost:8080/api/v1/blog/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Congradulations Your Article has been published successfully!");

      setTitle("");
      setCategory("");
      setContent("");
      setImage(null);

    } catch (error) {
      console.error("Upload failed", error);
      alert("Failed to upload article.");
    }
  };

  return (
    <section className="article-form-section">
      <div className="container form-card">
        <h2 className="section-title">Share Your Knowledge</h2>
        <form className="article-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Article Title"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            className="form-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="ai">AI & Education</option>
            <option value="development">Development</option>
            <option value="ml">Machine Learning</option>
            <option value="ux">UX Design</option>
            <option value="data">Data Science</option>
          </select>
          <textarea
            placeholder="Write your article content..."
            className="form-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>


          <input
            type="file"
            accept=".jpg,.png"
            className="form-input"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Publish Article
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ArticleForm;
