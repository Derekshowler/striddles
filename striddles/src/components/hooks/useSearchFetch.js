import { useState, useEffect } from "react";
import { SEARCH_BASE } from "../../config";

export const useSearchFetch = () => {
  const [state, setState] = useState({ searchData: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getSearch = async (endpoint) => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search("page");

    try {
      const API_Result = await (await fetch(endpoint)).json();
      setState((previous_State) => ({
        ...previous_State,
        searchData:
          isLoadMore !== -1
            ? [...previous_State.searchData, ...API_Result.results]
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
  console.log(state);
  useEffect(() => {
    getSearch(SEARCH_BASE);
  }, []);

  return [{ state, loading, error }, getSearch];
};
