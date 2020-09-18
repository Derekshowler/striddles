import { useState, useEffect } from 'react';
import { TRENDING_TV_URL } from '../../config';

export const useHomeFetch = () => {
  const [state, setState] = useState({ series: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(state);

  const fetchTV = async (endpoint) => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search('page');

    try {
      const result = await (await fetch(endpoint)).json();
      setState((prev) => ({
        ...prev,
        series: 
          isLoadMore !== -1
          ? [...prev.series, ...result.results]
          : [...result.results.slice(0, 18)],
        movies: 
          isLoadMore !== -1
          ? [...prev.movies, ...result.results]
          : [...result.results.slice(0, 18)],
        heroImage: prev.heroImage || result.results[Math.floor(Math.random()*result.results.length)],
        voteAverage: result.vote_average,
        currentPage: result.page,
        totalPages: result.total_pages,
        originalName: result.original_name,
        originalTitle: result.original_title
      }));

    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTV(TRENDING_TV_URL);
  }, [])

  return [{ state, loading, error}, fetchTV];
}

