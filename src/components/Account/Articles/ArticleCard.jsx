import React from "react";
import { useNavigate } from "react-router-dom";
import "./Article.css"; 
const ArticleCard = ({ data }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/read/${data.id}`, 
      {state: {data}}
    ); 
  };

  const getPreview = (text) => {
    const words = text.split(" ");
    return words.length > 40
      ? words.slice(0, 40).join(" ") + "..."
      : text;
  };

  return (
    <div className="article-card"  >
      <img src={`http://localhost:8080${data.coverImage}`} alt="thumbnail" className="article-card-thumbnail" />
      <h2 className="article-card-title">{data.title}</h2>
      <h3 className="article-card-category">{data.category}</h3>
      <p className="article-card-description">
        {getPreview(data.description)}
        {data.description.split(" ").length > 40 && (
          <span className="read-more" onClick={handleReadMore}>
            {" "}Read more
          </span>
        )}
      </p>
    </div>
  );
};

export default ArticleCard;
