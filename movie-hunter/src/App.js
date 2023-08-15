import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import MovieDetail from './components/MovieDetail';
import MovieProvider from './components/MovieProvider';
import Navbar from './components/Navbar';
import SearchResults from './components/SearchResults ';
function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <MovieProvider>
      <Router>
        <div className='App'>
          <Navbar setSearchResults={setSearchResults} />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/movies/:id' element={<MovieDetail />} />
            <Route path='/search-results/:query' element={<SearchResults />} />
          </Routes>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
