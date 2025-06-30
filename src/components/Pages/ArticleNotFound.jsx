import React from 'react'
import { Link } from 'react-router-dom'

function ArticleNotFound() {
  return (
    <div className="not-found-container">
        <h1>404 Article Not Found !</h1>
        <p>Sorry, the article you are looking for does not exist.</p>
        <Link to={"/account"} className="not-found-btn">Please Go Back</Link>
    </div>
  )
}

export default ArticleNotFound