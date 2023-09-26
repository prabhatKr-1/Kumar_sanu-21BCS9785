import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getNewsBySearch } from "../services/newsApi";
import NewsCard from "../components/NewsCard";
import "../styles/loader.css";  

function Search() {
  const { query } = useParams();

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNewsBySearch(query, {
          location: "in",
          sortBy: "popularity",
        });
        const limitedArticles = newsData.slice(0, 30);
        setNews(limitedArticles);
        setIsLoading(false); 
      } catch (error) {
        console.error("Error fetching news:", error);
        setIsLoading(false); 
      }
    };

    fetchNews();
  }, [query]);

  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="news-container">
          {news.map((newsItem) => (
            <NewsCard
              key={
                newsItem.author +
                newsItem.source.name +
                newsItem.publishedAt +
                newsItem.title
              }
              news={newsItem}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Search;
