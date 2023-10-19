// MovieCard.js
import React from 'react';
import './MovieCard.css';
const MovieCard = ({ title, image }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={`${title} poster`} />
      <div className="movie-details">
        <h3 className="movie-title">{title}</h3>

      </div>
    </div>
  );
};

export default MovieCard;
