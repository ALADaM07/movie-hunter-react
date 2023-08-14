import React from 'react';
import MovieProvider from './components/MovieProvider'; // Adjust the import path
import MoviesList from './components/MoviesList';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
  return (
    <MovieProvider>
      <div className='App'>
        <Navbar />
        <Slider />
        <MoviesList />
      </div>
    </MovieProvider>
  );
}

export default App;
