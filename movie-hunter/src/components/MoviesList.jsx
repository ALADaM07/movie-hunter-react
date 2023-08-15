import React, { useContext, useState } from 'react';
import Movie from './Movie';
import MovieContext from './MovieContext';
import './styles/MoviesList.css';

const MoviesList = () => {
  const { movies } = useContext(MovieContext);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6;
  const startIndex = (currentPage - 1) * moviesPerPage;
  const currentMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  return (
    <div>
      <h2 className='text-center p-3'>Top Movies</h2>
      <div className='container'>
        <div className='row'>
          {currentMovies.map((movie) => (
            <div className='col-4' key={movie.id}>
              <Movie movie={movie}></Movie>
            </div>
          ))}
        </div>
      </div>
      <div className='pagination'>
        {Array.from({ length: Math.ceil(movies.length / moviesPerPage) }).map(
          (_, index) => (
            <button key={index} onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default MoviesList;
