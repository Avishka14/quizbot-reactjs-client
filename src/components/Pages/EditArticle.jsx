import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Cookies from "js-cookie";
import API from "../../services/api";

function EditArticle() {
  const location = useLocation();
  const { article } = location.state || {};

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const userId = Cookies.get("userid");
  const articleId = article.id;

  const navigate = useNavigate();

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setCategory(article.category);
      setContent(article.description);
      setImage(article.coverImage);
    }
  }, [article]);

  const hanldeUpdate = async (e) => {
    e.preventDefault();
    if (!image || !title || !category || !content || !articleId) {
      return alert(
        "Please Check all Fields before Updating all fields are Required !"
      );
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("coverImage", image);
    formData.append("category", category);
    formData.append("description", content);
    formData.append("userid", userId);

    try {
      const response = await API.post(
        `/blog/updateblog/${articleId}`,
        formData
      );
      alert("Article updated successfully!");
      navigate("/account");
    } catch (error) {
      console.log("Update failed", error);
      if (error.response && error.response.data) {
        alert("Failed to upload article: " + error.response.data.message);
      } else {
        alert("Failed to upload article: " + error.message);
      }
    }
  };

  return (
    <>
      <Header />

      <div className="account-page">
        <section className="article-form-section">
          <div className="container form-card">
            <h2 className="section-title">Share Your Knowledge</h2>
            <form className="article-form" onSubmit={hanldeUpdate}>
              <img
                src={`http://localhost:8080${article.coverImage}`}
                alt="thumbnail"
                className="article-card-thumbnail"
              />

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
      </div>

      <Footer />
    </>
  );
}

export default EditArticle;
