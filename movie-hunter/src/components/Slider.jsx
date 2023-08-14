import React, { useContext, useState } from 'react';
import MovieContext from './MovieContext';
import SliderData from './SliderData';

const Slider = () => {
  const movies = useContext(MovieContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(movies.length / 3);
  const startIndex = currentSlide * 3;
  const currentMovies = movies.slice(startIndex, startIndex + 3);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className='container'>
      <div id='carouselExampleCaptions' className='carousel slide'>
        {/* ... carousel-indicators */}
        <SliderData
          movies={currentMovies}
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Slider;
