import React, { useState, useEffect, useContext } from "react";
import NewsCard from "../components/NewsCard";
import { getNewsByLocation } from "../services/newsApi";
import { db } from "../firebase";
import { AuthContext } from "../main";
import { doc, getDoc } from "firebase/firestore";
import "../styles/loader.css";

function Home() {
  const { id, isAuth } = useContext(AuthContext);
  const [news, setNews] = useState([]);
  const [userLocation, setUserLocation] = useState("in");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserLocation = async (uid) => {
      try {
        const userDocRef = doc(db, "users", uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          const location = userData.location;
          setUserLocation(location);
        } else {
          console.log("User document does not exist.");
        }
      } catch (error) {
        console.error("Error fetching user location:", error);
      }
    };

    if (id) {
      getUserLocation(id);
    }
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNewsByLocation(userLocation, {
          sortBy: "publishedAt",
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
  }, [userLocation, isAuth]);

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

export default Home;
