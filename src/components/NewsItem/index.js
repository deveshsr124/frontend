import React from 'react';
import './newsitem.css'
const NewsItem = ({ article }) => {
  console.log('article',article)
  let publishedDate=article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : ""
  console.log(publishedDate)
  return (
    <div className='news-item-container'>
      <h2>{article.title}</h2>
      <p>{article.source.name}</p>
      <p>{publishedDate}</p>
      {/* <p>{article.content}</p> */}
    </div>
  );
};

export default NewsItem;
