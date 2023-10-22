import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import NestCamWiredStandIcon from '@mui/icons-material/NestCamWiredStand';
import './Movie.css';

const Rating = ({ icon , rating }) => {
  return (
    <div className="movie__rating">
      <span>{icon}</span>
      <span>{rating}</span>
    </div>
  );
}

const MovieInfo = ({ name , icon, value }) => (
  <div className={`movie__info movie__${name}`}>
    <span className='info__head'>
      {icon}
    </span>
    <span>
      {value}
    </span>
  </div>
)

const Movie = ({ infos }) => {
  // const cast = infos.cast.map(actor => (
  //   <p key={actor}>{actor}</p>
  // ));

  return (
    <div className='movie-container'>
      <div className='movie-card'>
        <div className='movie-card-front'>
          <img src={infos.poster} alt={infos.title} />
        </div>
        <div className='movie-card-back'>
          <h2 className='movie__title'>{infos.title}</h2>
          <div className='movie__infos'>
            <MovieInfo  name='duration' icon={<TimelapseIcon/>} value={infos.duration} />
            <MovieInfo name='director' icon={<NestCamWiredStandIcon/>} value={infos.director} />
            <Rating icon={<StarRateIcon/>} rating={infos.rating} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
