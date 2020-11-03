import { useState, useEffect, useCallback } from "react";
import { API_URL, API_KEY } from "../../config";

export const useContentFetch = (fetchContentId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `${API_URL}${decodeURIComponent(
        fetchContentId
      )}?api_key=${API_KEY}`;
      console.log(endpoint);
      const result = await (await fetch(endpoint)).json();
      console.log(result);
      const creditsEndpoint = `${API_URL}${decodeURIComponent(
        fetchContentId
      )}/credits?api_key=${API_KEY}`;
      const creditsResult = await (await fetch(creditsEndpoint)).json();
      const directors = creditsResult.crew.filter(
        (member) => member.job === "Director"
      );

      setState({
        ...result,
        actors: creditsResult.cast,
        directors,
      });
      console.log(fetchData);
      console.log(fetchContentId);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [fetchContentId]);

  useEffect(() => {
    if (localStorage[fetchContentId]) {
      setState(JSON.parse(localStorage[fetchContentId]));
      setLoading(false);
    } else {
      fetchData();
    }
  }, [fetchData, fetchContentId]);

  useEffect(() => {
    localStorage.setItem(fetchContentId, JSON.stringify(state));
  }, [fetchContentId, state]);

  return [state, loading, error];
};
