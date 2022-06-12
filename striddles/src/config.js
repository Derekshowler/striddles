//TMDB Config / API information

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "11029839cf307d459df641c39e029d7b";

const SEARCH_BASE_URL = `${API_URL}search/multi?api_key=${API_KEY}&query=`;
const TRENDING_MOVIE_URL = `${API_URL}trending/movie/day?api_key=${API_KEY}`;
const TRENDING_TV_URL = `${API_URL}trending/tv/day?api_key=${API_KEY}`;
const SEARCH_BASE = `${API_URL}trending/tv/day?api_key=${API_KEY}`;
const NOW_PLAYING = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";

const BACKDROP_SIZE = "w1280";
const POSTER_SIZE = "w500";
const OMDB_API_URL = "http://www.omdbapi.com/?apikey=9c6a0021";

export {
  API_KEY,
  API_URL,
  SEARCH_BASE_URL,
  TRENDING_MOVIE_URL,
  TRENDING_TV_URL,
  NOW_PLAYING,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  SEARCH_BASE
};
