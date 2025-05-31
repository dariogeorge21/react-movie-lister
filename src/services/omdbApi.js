const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

class OMDbAPI {
  constructor() {
    if (!API_KEY) {
      console.warn('OMDb API key not found. Please set VITE_OMDB_API_KEY in your .env file.');
    }
  }

  async searchMovies(searchTerm, page = 1) {
    if (!API_KEY) {
      throw new Error('API key is required. Please set VITE_OMDB_API_KEY in your .env file.');
    }

    if (!searchTerm || searchTerm.trim().length === 0) {
      throw new Error('Search term is required');
    }

    try {
      const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}&page=${page}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.Response === 'False') {
        if (data.Error === 'Movie not found!') {
          return {
            Search: [],
            totalResults: '0',
            Response: 'True'
          };
        }
        throw new Error(data.Error || 'Failed to fetch movies');
      }

      return data;
    } catch (error) {
      console.error('Error searching movies:', error);
      throw error;
    }
  }

  async getMovieDetails(imdbID) {
    if (!API_KEY) {
      throw new Error('API key is required. Please set VITE_OMDB_API_KEY in your .env file.');
    }

    if (!imdbID) {
      throw new Error('IMDb ID is required');
    }

    try {
      const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.Response === 'False') {
        throw new Error(data.Error || 'Failed to fetch movie details');
      }

      return data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  }
}

export default new OMDbAPI();
