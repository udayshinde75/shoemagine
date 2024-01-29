import React from 'react'
import './article.css'
const Article = ({imageurl,sold, title}) => {
  return (
    <div className="store__blog-container_article">
      <div className="store__blog-container_article-image">
        <img src={imageurl} alt="" />
      </div>
      <div className="store__blog-container_article-content">
        <p>{sold}</p>
        <h3>{title}</h3>

      </div>
      <div className="store__blog-btn">
        <button type='button'>Buy Now</button>
      </div>
    </div>
  )
}

export default Article