import { useState, useEffect } from "react";
import { TRENDING_MOVIE_URL } from "../../config";

export const useMovieFetch = () => {
  const [movies, setMovies] = useState({ data: [] });
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(false);

  const popularMovies = async (movie) => {
    setError(false);
    setLoadingMore(true);

    const loading = movie.search("page");
    try {
      const getMovie = await (await fetch(movie)).json();
      setMovies((previousMovie) => ({
        ...previousMovie,
        data:
          loading !== -1
            ? [...previousMovie.data, ...getMovie.results]
            : [...getMovie.results.slice(0, 20)],
        heroImage:
          previousMovie.heroImage ||
          getMovie.results[
            Math.floor(Math.random() * getMovie.results.length)
          ],
        currentPage: getMovie.page,
        totalPage: getMovie.total_pages,
      }));
      console.log(getMovie);
      
    } catch (errorMovies) {
      setError(true);
    } 
    setLoadingMore(false);
  };
  useEffect(() => {
    popularMovies(TRENDING_MOVIE_URL);
  }, []);
  return [
    { movies, loadingMore, error }, popularMovies,
  ];
};
