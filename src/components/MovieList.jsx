import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, onMovieClick, hasSearched }) {
  if (!hasSearched) {
    return (
      <div className="no-results">
        <h3>🎬 Welcome to Movie Search</h3>
        <p>Start typing to search for your favorite movies, TV shows, and episodes!</p>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="no-results">
        <h3>No movies found</h3>
        <p>Try searching with different keywords</p>
      </div>
    );
  }

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onClick={onMovieClick}
        />
      ))}
    </div>
  );
}

export default MovieList;
