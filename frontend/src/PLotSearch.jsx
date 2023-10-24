import React, { useState } from 'react';
import Projector from './Projector';
import './plotsearch.css';
import Movie from './Movie';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const PLotSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [moviesToDisplay, setMoviesToDisplay] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items per page

  // Calculate the range of items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const moviesToDisplayOnPage = moviesToDisplay.slice(startIndex, endIndex);

  const handleSearch = async () => {
    // Perform the search and fetch data
    fetch('http://localhost:5000/check-plot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchQuery }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMoviesToDisplay(data.results);
        setCurrentPage(1); // Reset to the first page when performing a new search
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const totalPages = Math.ceil(moviesToDisplay.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="ploatsearch-main">
        <Projector />
        <div className="searchbar">
          <input
            type="text"
            placeholder="Enter the plot of a movie"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>
            <SearchIcon />
          </button>
        </div>
      </div>

      <div className="results-container">
        {moviesToDisplayOnPage.map((movie, index) => (
          <div key={index} className="movie-container">
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              state={{
                movieId: movie.id,
              }}
            >
              <Movie infos={movie} />
            </Link>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PLotSearch;
