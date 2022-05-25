import { useState, useEffect } from "react";
import { TRENDING_TV_URL } from "../../config";

export const useSeriesFetch = () => {
  const [series, setSeries] = useState({ dataTV: [] });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  const popularSeries = async (serie) => {
    setErrors(false);
    setLoading(true);

    const loadMore = serie.search("page");

    try {
      const getSeries = await (await fetch(serie)).json();
      setSeries((previousSerie) => ({
        ...previousSerie,
        dataTV:
          loadMore !== -1
            ? [...previousSerie.dataTV, ...getSeries.results]
            : [...getSeries.results.slice(0, 20)],
        heroImage:
          previousSerie.heroImage ||
          getSeries.results[
            Math.floor(Math.random() * getSeries.results.length)
          ],
        currentPages: getSeries.page,
        totalPages: getSeries.total_pages,
        mediaType: getSeries.results.media_type,
      }));
    } catch (errors) {
      setErrors(true);
      console.log(errors);
    }
    setLoading(false);
  };
  useEffect(() => {
    popularSeries(TRENDING_TV_URL);
  }, []);

  return [{ series, loading, errors }, popularSeries];
};
