import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movieData, setMovieData] = useState(null);
  const API_KEY = "53fc65b0";

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=tt1345836`
        );
        setMovieData(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [API_KEY]);

  return (
    <MovieContext.Provider value={{ movieData }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};
