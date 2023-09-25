import axios from "axios";
import { NEWS_API_KEY } from "../private";

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
});

export const getNewsByLocation = async (location, options = {sortBy:"publishedAt"}) => {
  try {
    const response = await api.get("/top-headlines", {
      params: {
        apiKey: NEWS_API_KEY,
        country: location,
        ...options,
      },
    });

    return response.data.articles;
  } catch (error) {
    throw error;
  }
};

export const getNewsBySearch = async (query, options = {}) => {
  try {
    const response = await api.get("/everything", {
      params: {
        apiKey: NEWS_API_KEY,
        q: query,
        ...options,
      },
    });

    return response.data.articles;
  } catch (error) {
    throw error;
  }
};

export const getNewsByCategory = async (category, options = {}) => {
  try {
    const response = await api.get("/top-headlines", {
      params: {
        apiKey: NEWS_API_KEY,
        category: category,
        country: "India",
        ...options,
      },
    });

    return response.data.articles;
  } catch (error) {
    throw error;
  }
};
