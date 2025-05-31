import React, { useState, useEffect } from 'react';
import omdbApi from '../services/omdbApi';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

function MovieDetails({ movie, onClose }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const movieDetails = await omdbApi.getMovieDetails(movie.imdbID);
        setDetails(movieDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [movie.imdbID]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x450/1a1a2e/667eea?text=No+Image';
  };

  if (loading) {
    return (
      <div className="modal-backdrop" onClick={handleBackdropClick}>
        <div className="modal-content">
          <LoadingSpinner message="Loading movie details..." />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="modal-backdrop" onClick={handleBackdropClick}>
        <div className="modal-content">
          <ErrorMessage message={error} />
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="movie-details">
          <div className="movie-details-poster">
            <img
              src={details.Poster !== 'N/A' ? details.Poster : 'https://via.placeholder.com/300x450/1a1a2e/667eea?text=No+Image'}
              alt={details.Title}
              onError={handleImageError}
            />
          </div>
          
          <div className="movie-details-info">
            <h1>{details.Title}</h1>
            <div className="movie-meta">
              <span className="year">{details.Year}</span>
              <span className="rating">{details.Rated}</span>
              <span className="runtime">{details.Runtime}</span>
            </div>
            
            <div className="movie-genres">
              {details.Genre && details.Genre.split(', ').map((genre, index) => (
                <span key={index} className="genre-tag">{genre}</span>
              ))}
            </div>
            
            <div className="movie-plot">
              <h3>Plot</h3>
              <p>{details.Plot}</p>
            </div>
            
            <div className="movie-details-grid">
              <div className="detail-item">
                <strong>Director:</strong> {details.Director}
              </div>
              <div className="detail-item">
                <strong>Cast:</strong> {details.Actors}
              </div>
              <div className="detail-item">
                <strong>Writer:</strong> {details.Writer}
              </div>
              <div className="detail-item">
                <strong>Language:</strong> {details.Language}
              </div>
              <div className="detail-item">
                <strong>Country:</strong> {details.Country}
              </div>
              <div className="detail-item">
                <strong>Released:</strong> {details.Released}
              </div>
            </div>
            
            {details.Ratings && details.Ratings.length > 0 && (
              <div className="movie-ratings">
                <h3>Ratings</h3>
                <div className="ratings-grid">
                  {details.Ratings.map((rating, index) => (
                    <div key={index} className="rating-item">
                      <span className="rating-source">{rating.Source}</span>
                      <span className="rating-value">{rating.Value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
