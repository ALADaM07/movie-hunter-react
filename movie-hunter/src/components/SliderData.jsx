import React from 'react';
import './styles/SliderData.css';

const SliderData = ({
  movies,
  currentSlide,
  totalSlides,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className='carousel-inner'>
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className='d-block w-100 height-300'
            alt={movie.title}
          />
          <div className='carousel-caption d-none d-md-block'>
            <h5>{movie.title}</h5>
            <p>{movie.overview}</p>
          </div>
        </div>
      ))}
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleCaptions'
        data-bs-slide='prev'
        onClick={onPrevClick}>
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleCaptions'
        data-bs-slide='next'
        onClick={onNextClick}>
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

export default SliderData;
