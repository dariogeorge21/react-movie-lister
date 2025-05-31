import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import WelcomeMessage from './components/WelcomeMessage';
import useMovieSearch from './hooks/useMovieSearch';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  const {
    searchTerm,
    setSearchTerm,
    movies,
    loading,
    error,
    totalResults,
    hasSearched,
    loadMoreMovies,
    clearSearch,
    canLoadMore
  } = useMovieSearch();

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null);
  };

  const handleRetry = () => {
    if (searchTerm) {
      // The hook will automatically retry when searchTerm changes
      setSearchTerm(searchTerm + ' ');
      setSearchTerm(searchTerm);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>🎬 Movie Search</h1>
          <p>Discover movies, TV shows, and episodes</p>
        </div>
      </header>

      <main className="container">
        {!apiKey || apiKey === 'your_api_key_here' ? (
          <WelcomeMessage />
        ) : (
          <>
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onClear={clearSearch}
            />

            {error && (
              <ErrorMessage
                message={error}
                onRetry={handleRetry}
              />
            )}

            {loading && movies.length === 0 && (
              <LoadingSpinner message="Searching for movies..." />
            )}

            <MovieList
              movies={movies}
              onMovieClick={handleMovieClick}
              hasSearched={hasSearched}
            />

            {canLoadMore && (
              <div className="load-more-container">
                <button
                  className="load-more-button"
                  onClick={loadMoreMovies}
                  disabled={loading}
                >
                  {loading ? 'Loading...' : `Load More (${movies.length} of ${totalResults})`}
                </button>
              </div>
            )}

            {loading && movies.length > 0 && (
              <LoadingSpinner message="Loading more movies..." />
            )}
          </>
        )}
      </main>

      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
}

export default App;
