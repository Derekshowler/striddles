import { useState, useEffect } from "react";
import { TRENDING_TV_URL } from "../../config";

export const useSeriesFetch = () => {
  const [state, setState] = useState({ TV_Data: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getSeries = async (endpoint) => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search("page");

    try {
      const API_Result = await (await fetch(endpoint)).json();
      setState((previous_State) => ({
        ...previous_State,
        TV_Data:
          isLoadMore !== -1
            ? [...previous_State.TV_Data, ...API_Result.results]
            : [...API_Result.results.slice(0, 20)],
        heroImage:
          previous_State.heroImage ||
          API_Result.results[
            Math.floor(Math.random() * API_Result.results.length)
          ],
        currentPage: API_Result.page,
        totalPages: API_Result.total_pages,
        mediaType: API_Result.results.media_type,
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getSeries(TRENDING_TV_URL);
  }, []);

  return [{ state, loading, error }, getSeries];
};
