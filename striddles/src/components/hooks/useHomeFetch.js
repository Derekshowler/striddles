import { useState, useEffect } from 'react';
import { TRENDING_TV_URL } from '../../config';

export const useHomeFetch = () => {
  const [state, setState] = useState({ cardData: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(state);

  const fetchAPITrendingSeriesData = async (endpoint) => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search('page');

    try {
      const API_Result = await (await fetch(endpoint)).json();
      setState((previous_State) => ({
        ...previous_State,
        cardData: 
          isLoadMore !== -1
          ? [...previous_State.cardData, ...API_Result.results]
          : [...API_Result.results.slice(0, 18)],
        heroImage: previous_State.heroImage || API_Result.results[Math.floor(Math.random()*API_Result.results.length)],
        currentPage: API_Result.page,
        totalPages: API_Result.total_pages,
      }));

    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAPITrendingSeriesData(TRENDING_TV_URL);
  }, [])

  return [{ state, loading, error}, fetchAPITrendingSeriesData];
}

