import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './MovieDetailspage.css';

const MovieDetailsPage = () => {
  let { state } = useLocation();
  const movieId = state?.movieId;
  const recommendedListIds = state?.recommendedListIds || [];

  const [movieDetails, setMovieDetails] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [isRecommendedContainerVisible, setRecommendedContainerVisible] = useState(false);

  // Ref to the recommended container
  const recommendedContainerRef = useRef(null);

  useEffect(() => {
    // Fetch movie details using Axios based on the movieId
    axios
      .get(`http://localhost:5000/movies/${movieId}`)
      .then((response) => setMovieDetails(response.data))
      .catch((error) => console.error('Error fetching movie details:', error));

    // Fetch recommended movie details based on recommendedListIds
    const recommendedMoviesPromises = recommendedListIds.map((id) =>
      axios.get(`http://localhost:5000/movies/${id}`)
    );

    axios
      .all(recommendedMoviesPromises)
      .then((responses) => {
        const recommendedMoviesData = responses.map((response) => response.data);
        setRecommendedMovies(recommendedMoviesData);
      })
      .catch((error) => console.error('Error fetching recommended movies:', error));

    // Add click event listener to the window to handle clicks outside of the container
    window.addEventListener('click', handleWindowClick);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('click', handleWindowClick);
    };
  }, [movieId, recommendedListIds]);

  // Handle clicks outside of the container
  const handleWindowClick = (e) => {
    if (recommendedContainerRef.current && !recommendedContainerRef.current.contains(e.target)) {
      setRecommendedContainerVisible(false);
    }
  };

  return (
    <div className="movie-details-page">
      {movieDetails && (
        <div className='movie-details__info'>
          <div className='movie-details__desc'>
            <h1 className='movie-details__title'>{movieDetails.title}</h1>
            <p className='movie-details__description'>{movieDetails.description}</p>
          </div>
          <div className='poster-image'>
            <img src={movieDetails.image} ></img>
          </div>
        </div>
      )}

      <h3>Recommended Movies:</h3>

      {/* Toggle recommended container visibility */}
      <div
        className="recommended-movie-overlay"
        onClick={() => setRecommendedContainerVisible(!isRecommendedContainerVisible)}
      >
        <div className="recommended-movie-collage" ref={recommendedContainerRef}>
          {recommendedMovies.slice(0, 4).map((movie) => (
            <img
              key={movie.id}
              src={movie.image}
              alt={movie.title}
              className="recommended-movie-image"
            />
        )  )}
        </div>
      </div>

      {isRecommendedContainerVisible && (
        <div className="recommended-movies-container">
          {recommendedMovies.map((movie) => (
            <div className='movie'>
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              state={{
                movieId: movie.id,
                recommendedListIds: movie.recommendations
              }}
            >
              <MovieCard
                title={movie.title}
                description={movie.description}
                image={movie.image}
              />
            </Link>
            </div>
       ) )}
        </div>
      )}
    </div>
            );
};

export default MovieDetailsPage;
