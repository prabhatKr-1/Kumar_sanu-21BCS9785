import React, { useState, useEffect, useContext } from "react";
import NewsCard from "../components/NewsCard";
import { getNewsByLocation } from "../services/newsApi";
import { db } from "../firebase";
import { AuthContext } from "../main";
import { doc, getDoc } from "firebase/firestore";

function Home() {
  const { id } = useContext(AuthContext);
  const [news, setNews] = useState([]);
  const [userLocation, setUserLocation] = useState("in");

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
  }, [id]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log(userLocation);
        const newsData = await getNewsByLocation(userLocation, {
          sortBy: "popularity",
        });
        const limitedArticles = newsData.slice(0, 30);
        setNews(limitedArticles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [userLocation]);

  return (
    <>
      <div className="news-container">
        {news.map((newsItem) => (
          <NewsCard key={newsItem.title} news={newsItem} />
        ))}
      </div>
    </>
  );
}

export default Home;
