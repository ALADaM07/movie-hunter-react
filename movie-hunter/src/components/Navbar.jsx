import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieContext from './MovieContext';

const Navbar = ({ setSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { searchMovies } = useContext(MovieContext);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const results = await searchMovies(searchQuery);
    console.log('Search Results:', results);
    setSearchResults(results);
    navigate(`/search-results/${searchQuery}`);
    setSearchQuery('');
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand' style={{ color: '#6c631a' }} href='/#'>
            Movie Hunter !!
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='/#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/#'>
                  Contact
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='/#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  Movie Genre
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='/#'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='/#'>
                      Drama
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='/#'>
                      About
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className='d-flex' onSubmit={handleSubmit}>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                value={searchQuery}
                onChange={handleSearch}
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
