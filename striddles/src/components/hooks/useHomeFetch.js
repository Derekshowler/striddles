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
          : [...result.results],
        heroImage: prev.heroImage || result.results[9],
        currentPage: result.page,
        totalPages: result.total_pages,
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

