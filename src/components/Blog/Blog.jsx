import React ,{useEffect , useState} from "react";
import "./BlogStyle.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { getAllBlogs } from "../../services/authServices";
import ArticleCard from "../Account/Articles/ArticleCard";
import { Link } from "react-router-dom";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function Blog() {
 
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
       
    getAllBlogs()
    .then((response) =>{
      setBlogs(response.data);
    })

    .catch((error)=>{
      console.error("Error fetching blogs:", error);
    });

  }, []);

   

  return (
    <>
      <Header />
      <div className="blog-page">
        <section className="blog-search-section">
          <div className="blog-container">
            <div className="blog-search-bar">
              <input
                type="text"
                placeholder="Search articles..."
                className="blog-input blog-search-input"
              />
              <button className="blog-btn blog-search-btn">Search</button>
            </div>
            <div className="blog-filters">
              <select className="blog-select blog-category-filter">
                <option value="all">All Categories</option>
                <option value="ai">AI & Education</option>
                <option value="development">Development</option>
                <option value="ml">Machine Learning</option>
                <option value="ux">UX Design</option>
                <option value="data">Data Science</option>
              </select>
              <div className="blog-tabs">
                <button className="blog-tab blog-tab-active">All Posts</button>
                <button className="blog-tab">Featured</button>
                <button className="blog-tab">Recent</button>
              </div>
            </div>
          </div>
        </section>

   

            <section className="articles-section">
          <div className="container">
            <h4 className="section-subtitle">Read More Gain Knowledge More</h4>

            {blogs.length === 0 ? (
              <p>No articles found.</p>
            ) : (
              <div className="articles-grid">
                {blogs.map((article) => (
                  <ArticleCard data={article} key={article.id}>  
                  </ArticleCard>
                ))}
              </div>
            )}
          </div>
        </section>

 

        <section className="blog-articles-section">
          <div className="blog-container">
            <h2 className="blog-section-title">Latest Articles</h2>
            <div className="blog-articles-grid">
              {/* Repeat this article card block for each post */}

              {/* Example article */}
              <article className="blog-card">
                <img
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop"
                  alt="React Development"
                  className="blog-card-image"
                />
                <div className="blog-card-content">
                  <span className="blog-category blog-category-dev">
                    Development
                  </span>
                  <h3 className="blog-card-title">
                    Building Interactive Quizzes with React
                  </h3>
                  <p className="blog-card-excerpt">
                    A comprehensive guide to creating engaging quiz applications
                    using React hooks and modern JavaScript.
                  </p>
                  <div className="blog-card-meta">
                    <span className="blog-author">Sarah Chen</span>
                    <span className="blog-date">Jun 17, 2025</span>
                    <span className="blog-read-time">8 min read</span>
                  </div>
                  <div className="blog-card-actions">
                    <button className="blog-btn blog-btn-like">❤️ 38</button>
                    <button className="blog-btn blog-btn-comment">💬 8</button>
                    <button className="blog-btn blog-btn-share">🔗</button>
                  </div>
                </div>
              </article>

              {/* ... other articles are unchanged, follow the same structure */}
            </div>

            <div className="blog-load-more">
              <button className="blog-btn blog-btn-primary">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        <section className="blog-newsletter-section">
          <div className="blog-container">
            <h2 className="blog-section-title">Stay Updated</h2>
            <p className="blog-newsletter-text">
              Get the latest insights on educational technology delivered to
              your inbox.
            </p>
            <form className="blog-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="blog-input blog-email-input"
              />
              <button type="submit" className="blog-btn blog-btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Blog;
