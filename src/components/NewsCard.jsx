import React from "react";
import "../styles/card.css";

function NewsCard({ news }) {
  const clickHandler = () => {
    window.open(news.url, "_blank");
  };
  return (
    <div className="card" style={{cursor:"pointer"}} onClick={clickHandler}>
      <div className="headline">{news.title}</div>
      <div className="image">
        <img src={news.urlToImage} alt={news.title}  />
      </div>
      <div className="content">{news.description}</div>
    </div>
  );
}

export default NewsCard;
0