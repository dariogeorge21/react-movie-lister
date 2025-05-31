import React from 'react';

function MovieCard({ movie, onClick }) {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x450/1a1a2e/667eea?text=No+Image';
  };

  const handleClick = () => {
    if (onClick) {
      onClick(movie);
    }
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450/1a1a2e/667eea?text=No+Image'}
        alt={movie.Title}
        className="movie-poster"
        onError={handleImageError}
      />
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">{movie.Year}</p>
        <span className="movie-type">{movie.Type}</span>
      </div>
    </div>
  );
}

export default MovieCard;
