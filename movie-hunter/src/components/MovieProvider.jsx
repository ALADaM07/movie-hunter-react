import React, { useEffect, useState } from 'react';
import MovieContext from './MovieContext';

const MovieProvider = ({ children }) => {
  const api_key = '0318c8976c241ad5c1dcb503c3697264';
  const api_url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${api_key}`;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(api_url)
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
  }, []);

  return (
    <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;
