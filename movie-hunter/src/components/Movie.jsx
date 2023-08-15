import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {
  const { movie } = props;
  return (
    <div className='card'>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        className='card-img-top'
        alt='...'
      />
      <div className='card-body'>
        <h5 className='card-title'>{movie.title}</h5>
        <p className='card-text'>Popularity: {movie.popularity}</p>
        <p className='card-text'>Release date: {movie.release_date}</p>
        <p className='card-text'>Vote average: {movie.vote_average}</p>
        <p className='card-text'>Vote count: {movie.vote_count}</p>
        <Link to={`/movies/${movie.id}`} className='btn btn-outline-success'>
          Overview
        </Link>
      </div>
    </div>
  );
};

export default Movie;
