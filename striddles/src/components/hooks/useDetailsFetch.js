import { useState, useEffect, useCallback } from "react";
import { API_URL, API_KEY } from "../../config";

export const useDetailsFetch = (fetchDetails) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `${API_URL}${decodeURIComponent(fetchDetails)}?api_key=${API_KEY}`;
      const result = await (await fetch(endpoint)).json();
      const creditsEndpoint = `${API_URL}${decodeURIComponent(fetchDetails)}/credits?api_key=${API_KEY}`;
      const creditsResult = await (await fetch(creditsEndpoint)).json();
      const directors = creditsResult.crew.filter((member) => member.job === "Director");
      const similar = `${API_URL}${decodeURIComponent(fetchDetails)}/similar/?api_key=${API_KEY}`;
      const similiarResult = await (await fetch(similar)).json();

      setState({
        ...result,
        actors: creditsResult.cast,
        directors,
        similar: similiarResult.results,
      });
      console.log(fetchData);
      console.log(fetchDetails);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [fetchDetails]);

  useEffect(() => {
    if (localStorage[fetchDetails]) {
      setState(JSON.parse(localStorage[fetchDetails]));
      setLoading(false);
    } else {
      fetchData();
    }
  }, [fetchData, fetchDetails]);

  useEffect(() => {
    localStorage.setItem(fetchDetails, JSON.stringify(state));
  }, [fetchDetails, state]);

  return [state, loading, error];
};
