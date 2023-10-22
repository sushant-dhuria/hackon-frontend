import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import './moviePage.css';
import axios from 'axios';

const MoviePage = () => {
  const [playlistData, setPlaylistData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/playlists'); // Use the correct API URL
        const playlists = response.data;

        const playlistWithMovieDetails = await Promise.all(
          playlists.map(async (playlist) => {
            const movieDetails = await Promise.all(
              playlist.movies.map(async (movieId) => {
                try {
                  const movieResponse = await axios.get(`http://localhost:5000/movies/${movieId}`);
                  return movieResponse.data;
                } catch (error) {
                  console.error('Error fetching movie details:', error);
                  return { id: movieId, title: 'Movie Not Found' };
                }
              })
            );

            return { ...playlist, movies: movieDetails };
          })
        );

        setPlaylistData(playlistWithMovieDetails);
      } catch (error) {
        console.error('Error fetching playlist data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="movie-page">
    
      {playlistData.map((playlist) => (
        <div key={playlist.id} className='playlist'>
          <h2>{playlist.name}</h2>
          <div className="movie-card-container">
            {playlist.movies.map((movie) => (
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
                state={{
                  movieId: movie.id,
                  recommendedListIds: movie.recommendations
                }}
              >
                <MovieCard
                  infos={movie}
                />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviePage;
