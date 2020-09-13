import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';

export const useHomeFetch = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(state);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);

    try {
      const result = await (await fetch(endpoint)).json();
      setState((prev) => ({
        ...prev,
        movies: [...result.results],
        heroImage: prev.heroImage || result.results[1],
        currentPage: result.page,
        totalPages: result.toal_pages,
      }));

    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(`${API_URL}trending/tv/week?api_key=${API_KEY}`);
  }, [])

  return [{ state, loading, error}, fetchMovies];
}

