import React, { useEffect, useState } from 'react';
import MovieContext from './MovieContext';

const MovieProvider = ({ children }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  // const api_key = '0318c8976c241ad5c1dcb503c3697264';
  const cards_api_url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${api_key}`;
  const slider_api_url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=${api_key}`;
  const search_api_base_url = `https://api.themoviedb.org/3/search/movie?&include_adult=false&language=en-US&page=1&api_key=${api_key}`;

  const [movies, setMovies] = useState([]);

  const fetchMovies = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setMovies(data.results);
        } else {
          console.error('No results found in the API response');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const fetchTrendingMovies = () => {
    fetchMovies(cards_api_url);
  };

  const searchMovies = (query) => {
    const search_api_url = `${search_api_base_url}&query=${query}`;
    fetchMovies(search_api_url);
  };

  const fetchSliderMovies = () => {
    fetchMovies(slider_api_url);
  };

  useEffect(() => {
    fetchTrendingMovies();
    fetchSliderMovies();
  }, []);

  const resetMovies = () => {
    setMovies([]);
    fetchTrendingMovies();
  };

  return (
    <MovieContext.Provider
      value={{ movies, searchMovies, resetMovies, fetchSliderMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
