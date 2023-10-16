import React from 'react';
import './Results.css';
import Movie from './Movie';
const Results = ({ results }) => {
    // Assuming results is an array of movie data

  
    return (
      <div className="results-container">
       { results.map((movie, index) => (
      <div key={index} className="movie-container">
      <Movie infos={movie} />
    </div>
    ))}
      </div>
    );
  };
  
  export default Results;
  
