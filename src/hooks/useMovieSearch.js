import { useState, useEffect, useCallback } from 'react';
import omdbApi from '../services/omdbApi';
import useDebounce from './useDebounce';

function useMovieSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const searchMovies = useCallback(async (term, page = 1) => {
    if (!term || term.trim().length === 0) {
      setMovies([]);
      setTotalResults(0);
      setError(null);
      setHasSearched(false);
      return;
    }

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const data = await omdbApi.searchMovies(term, page);
      
      if (page === 1) {
        setMovies(data.Search || []);
      } else {
        setMovies(prev => [...prev, ...(data.Search || [])]);
      }
      
      setTotalResults(parseInt(data.totalResults) || 0);
      setCurrentPage(page);
    } catch (err) {
      setError(err.message);
      if (page === 1) {
        setMovies([]);
        setTotalResults(0);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMoreMovies = useCallback(() => {
    if (!loading && movies.length < totalResults) {
      searchMovies(debouncedSearchTerm, currentPage + 1);
    }
  }, [loading, movies.length, totalResults, debouncedSearchTerm, currentPage, searchMovies]);

  const clearSearch = useCallback(() => {
    setSearchTerm('');
    setMovies([]);
    setError(null);
    setTotalResults(0);
    setCurrentPage(1);
    setHasSearched(false);
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchMovies(debouncedSearchTerm, 1);
    } else {
      setMovies([]);
      setTotalResults(0);
      setError(null);
      setHasSearched(false);
    }
  }, [debouncedSearchTerm, searchMovies]);

  return {
    searchTerm,
    setSearchTerm,
    movies,
    loading,
    error,
    totalResults,
    currentPage,
    hasSearched,
    loadMoreMovies,
    clearSearch,
    canLoadMore: movies.length < totalResults && !loading
  };
}

export default useMovieSearch;
