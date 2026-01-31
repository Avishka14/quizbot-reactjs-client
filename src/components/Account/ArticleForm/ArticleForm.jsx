import React, { useState, useEffect } from "react";
import * as authServices from "../../../services/authServices";
import LoadingPage from "../../Pages/LoadingPage";
import LoginRequire from "../../Pages/LoginRequire";

const ArticleForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadAccountData = async () => {
      try {
        const userRes = await authServices.getUserByToken();
        setUser(userRes.data);
      } catch (err) {
        console.error("Auth error:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadAccountData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!image || !title || !category || !content) {
      return alert("All fields are required including image.");
    }

    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("title", title);
      formData.append("category", category);
      formData.append("content", content);

      const response = await authServices.uploadBlog(formData);

      if (response.status === 201 || response.status === 200) {
        alert("Article uploaded successfully");

        // Clear form
        setTitle("");
        setCategory("");
        setContent("");
        setImage(null);
        
        // Reset file input
        document.querySelector('input[type="file"]').value = "";
      }
    } catch (error) {
      console.error("Upload failed", error);

      if (error.response && error.response.data) {
        alert("Failed to upload article: " + error.response.data.message);
      } else {
        alert("Failed to upload article: " + error.message);
      }
    }
  };

  if (loading) return <LoadingPage />;
  if (!user) return <LoginRequire />;

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
            required
          />
          <select
            className="form-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Education">Education</option>
            <option value="Development">Development</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Science">Science</option>
          </select>
          <textarea
            placeholder="Write your article content..."
            className="form-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>

          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            className="form-input"
            onChange={(e) => setImage(e.target.files[0])}
            required
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