import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getNewsBySearch } from "../services/newsApi";
import NewsCard from "../components/NewsCard";

function Search() {
  const { query } = useParams();

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNewsBySearch(query, {
          location: "in",
          sortBy: "publishedAt",
        });
        const limitedArticles = newsData.slice(0, 30);
        setNews(limitedArticles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [query]);

  return (
    <>
      <div className="news-container">
        {news.map((newsItem) => (
          <NewsCard key={newsItem.author + newsItem.source.name + newsItem.publishedAt + newsItem.title} news={newsItem} />
        ))}
      </div>
    </>
  );
}

export default Search;
