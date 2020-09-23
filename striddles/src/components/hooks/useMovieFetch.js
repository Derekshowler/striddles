import { useState, useEffect } from 'react';
import { TRENDING_MOVIE_URL } from '../../config';

export const useMovieFetch = () => {
  const [stateMovies, setStateMovies] = useState({ cardMovieData: [] });
  const [loadingMovies, setLoadingMovies] = useState(false);
  const [errorMovies, setErrorMovies] = useState(false);

  console.log(stateMovies);

  const fetchAPIPopularMovieData = async (endpointMovie) => {
    setErrorMovies(false);
    setLoadingMovies(true);

    const isLoadMore = endpointMovie.search('page');

    try {
      const API_Movie_Result = await (await fetch(endpointMovie)).json();
      setStateMovies((previous_StateMovie) => ({
        ...previous_StateMovie,
        cardMovieData: 
          isLoadMore !== -1
          ? [...previous_StateMovie.cardMovieData, ...API_Movie_Result.results]
          : [...API_Movie_Result.results.slice(0, 14)],
        heroImage: previous_StateMovie.heroImage || API_Movie_Result.results[Math.floor(Math.random()*API_Movie_Result.results.length)],
        currentPageMovies: API_Movie_Result.page,
        totalPagesMovies: API_Movie_Result.total_pages,
      }));

    } catch (errorMovies) {
      setErrorMovies(true);
      console.log(errorMovies);
    }
    setLoadingMovies(false);
  };

  useEffect(() => {
    fetchAPIPopularMovieData(TRENDING_MOVIE_URL);
  }, [])

  return [{ stateMovies, loadingMovies, errorMovies}, fetchAPIPopularMovieData];
}