import React from 'react';
import NewsItem from '../NewsItem';

const NewsList = ({ articles }) => {
  console.log('articles',articles.length)
  return (
    <div className='news-list-container'>
      {articles?.map((item, index) => (
       <NewsItem key={index} article={item} />
      ))}
    </div>
  );
};

export default NewsList;
