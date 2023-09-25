import React from "react";
import { useState,useEffect } from "react";
import NewsCard from "../components/NewsCard";
import { getNewsByLocation,getNewsBySearch } from "../services/newsApi";

function Home() {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNewsByLocation('in', {
          
        });
        const limitedArticles = newsData.slice(0, 30);
        setNews(limitedArticles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <div className="news-container" >
        {news.map((newsItem) => (
          <NewsCard key={newsItem.title} news={newsItem} />
        ))}
      </div>
    </>
  );
}

Home.propTypes = {};

export default Home;
