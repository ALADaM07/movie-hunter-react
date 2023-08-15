import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MovieContext from './MovieContext';
import './styles/SearchResults.css';

const SearchResults = () => {
  const { query } = useParams();
  const { movies, searchMovies, resetMovies } = useContext(MovieContext);
  const [numResults, setNumResults] = useState(0);

  useEffect(() => {
    const fetchSearchResults = async () => {
      await searchMovies(query);
    };

    fetchSearchResults();
  }, [query]);

  useEffect(() => {
    setNumResults(movies.length);
  }, [movies]);

  return (
    <div className='search-results-container'>
      <h2 className='search-results-header'>Search Results for: "{query}"</h2>
      <p>Number of results found: {numResults}</p>
      <button type='button' class='btn btn-outline-success'>
        <Link to='/' onClick={resetMovies} className='back-link'>
          Back
        </Link>
      </button>
      {movies.map((movie) => (
        <div key={movie.id} className='result-card'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className='result-details'>
            <h3 className='result-title'>{movie.title}</h3>
            <p className='release_date'>Release date: {movie.release_date}</p>
            <p className='popularity'>Popularity: {movie.popularity}</p>
            <Link
              to={`/movies/${movie.id}`}
              className='btn btn-outline-success'>
              Overview
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
