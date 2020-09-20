import React, { useState } from "react";
import {
  TRENDING_MOVIE_URL,
  TRENDING_TV_URL,
  SEARCH_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
} from "../../config";

//import components we want to use on this page..
import SearchBar from "../elements/SearchBar";
import Grid from "../elements/Grid";
import Card from "../elements/Card";
import Spinner from "../elements/Spinner";
import LoadMoreBtn from "../elements/LoadMoreBtn";
import HeroImage from "../elements/HeroImage";

//import custom hook
import { useHomeFetch } from "../../components/hooks/useHomeFetch";
import { useMovieFetch } from "../hooks/useMovieFetch";
import NoImage from "../../components/assets/images/no_image.jpg";

const Home = () => {
  //API Fetch for Series and Search + Load More
  const [
    {
      state: { cardData, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchAPITrendingSeriesData,
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = (search) => {
    const endpoint = search ? SEARCH_BASE_URL + search : TRENDING_TV_URL;

    setSearchTerm(search);
    fetchAPITrendingSeriesData(endpoint);
  };

  const loadMoreSeries = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${
      currentPage + 1
    }`;
    const trendingSeriesEndpoint = `${TRENDING_TV_URL}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : trendingSeriesEndpoint;

    fetchAPITrendingSeriesData(endpoint);
  };

  //API Fetch for Movies + Load More
  const [
    {
      stateMovies: { cardMovieData, currentPageMovies, totalPagesMovies },
      loadingMovies,
      errorMovies,
    },
    fetchAPIPopularMovieData,
  ] = useMovieFetch();

  const LoadMoreMovies = () => {
    const popularMovieEndpoint = `${TRENDING_MOVIE_URL}&page=${
      currentPageMovies + 1
    }`;

    fetchAPIPopularMovieData(popularMovieEndpoint);
  };

  //Make sure we have data and no errors
  if (error) return <div>Something went wrong with Series...</div>;
  if (errorMovies) return <div>Something went wrong with Movies...</div>;
  if (!cardData[0]) return <Spinner />;
  if (!cardMovieData[0]) return <Spinner />;

  //Render Page Components
  return (
    <>
      <SearchBar callback={searchMovies} />
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          nameId={heroImage.name}
          originalName={heroImage.name}
          originalTitle={heroImage.title}
          title={heroImage.original_name}
          text={heroImage.overview}
        />
      )}
      <Grid header={searchTerm ? "Search Result" : "Trending TV Shows"}>
        {cardData.map((dataId) => (
          <Card
            key={dataId.id}
            clickable
            image={
              dataId.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${dataId.poster_path}`
                : NoImage
            }
            voteAverage={dataId.vote_average}
            nameId={dataId.name}
            originalName={dataId.name}
            originalTitle={dataId.title}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load More" callback={loadMoreSeries} />
      )}

      {!searchTerm && (
        <Grid header="Trending Movies">
          {cardMovieData.map((movieId) => (
            <Card
              key={movieId.id}
              clickable
              image={
                movieId.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movieId.poster_path}`
                  : NoImage
              }
              voteAverage={movieId.vote_average}
              nameId={movieId.name}
              originalName={movieId.name}
              originalTitle={movieId.title}
            />
          ))}
        </Grid>
      )}
      {loadingMovies && <Spinner />}
      {currentPageMovies < totalPagesMovies && !loadingMovies && (
        <LoadMoreBtn text="Load More" callback={LoadMoreMovies} />
      )}
    </>
  );
};

export default Home;
