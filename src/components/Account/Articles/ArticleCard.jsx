import React from "react";
import { useNavigate } from "react-router-dom";
import "./Article.css";

const ArticleCard = ({ data, children }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/read/${data.id}`, { state: { data } });
  };

  const getPreview = (text) => {
    const words = text.split(" ");
    return words.length > 40 ? words.slice(0, 40).join(" ") + "..." : text;
  };

  const description = data?.description || "";

  return (
    <div className="article-card">
      <div className="extra-content">{children}</div>

      <img
        src={`http://localhost:8080${data.coverImage}`}
        alt="thumbnail"
        className="article-card-thumbnail"
      />

       <span
          className={`approval-badge ${data.approvalStatus.toLowerCase()}`}
       >
         {data.approvalStatus === "APPROVED" && "Approved"}
         {data.approvalStatus === "PENDING" && "Pending Approval"}
         {data.approvalStatus === "DECLINED" && "Declined"}
      </span>


      <h2 className="article-card-title">{data.title.length > 15 ? data.title.slice(0, 15) + "..." : data.title}</h2>
      <h3 className="article-card-category">{data.category}</h3>

      <p className="article-card-description">
        {getPreview(description)}

        {description.split(" ").length > 40 && (
          <span className="read-more" onClick={handleReadMore}>
            {" "}
            Read more
          </span>
        )}
      </p>
    </div>
  );
};

export default ArticleCard;
