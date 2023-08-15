import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import MovieContext from './MovieContext';
import './styles/MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const { movies } = useContext(MovieContext);
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='movie-detail'>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt='...'
      />
      <h2>{movie.title}</h2>
      <p>Overview: {movie.overview}</p>
      <p>Release date: {movie.release_date}</p>
      <Link to={'/'} className='btn btn-outline-success'>
        Go Back
      </Link>
    </div>
  );
};

export default MovieDetail;
