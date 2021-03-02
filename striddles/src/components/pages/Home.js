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
      state: { TV_Data, currentPage, totalPages, },
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
      stateMovies: {
        Movie_Data,
        heroImage,
        currentPageMovies,
        totalPagesMovies,
      },
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
  if (!TV_Data[0]) return <Spinner />;
  if (!Movie_Data[0]) return <Spinner />;

  //Render Page Components
  return (
    <>
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          clickable
          nameId={heroImage.name}
          fetchContentId={encodeURIComponent(
            heroImage.media_type + "/" + heroImage.id
          )}
          originalName={heroImage.name}
          originalTitle={heroImage.title}
          title={heroImage.original_name}
          text={heroImage.overview}
        />
      )}
      {!searchTerm && (
      <Grid header={"Trending TV"}>
        {TV_Data.map((dataId) => (
          <Card
            key={dataId.id}
            clickable
            image={
              dataId.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${dataId.poster_path}`
                : NoImage
            }
            voteAverage={dataId.vote_average}
            fetchContentId={encodeURIComponent(
              dataId.media_type + "/" + dataId.id
            )}
            name={dataId.name}
          />
        ))}
      </Grid>
      )}
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load More" callback={loadMoreSeries} />
      )}

      {!searchTerm && (
        <Grid header="Trending Movies">
          {Movie_Data.map((movieId) => (
            <Card
              key={movieId.id}
              clickable
              image={
                movieId.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movieId.poster_path}`
                  : NoImage
              }
              voteAverage={movieId.vote_average}
              fetchContentId={encodeURIComponent(
                movieId.media_type + "/" + movieId.id
              )}
              fetchContentName={movieId.name}
              originalName={movieId.name}
              originalTitle={movieId.title}
              fetchMediaType={movieId.media_type}
            />
          ))}
        </Grid>
      )}
      {loadingMovies && <Spinner />}
      {currentPageMovies < totalPagesMovies &&
        !loadingMovies &&
        !searchTerm && (
          <LoadMoreBtn text="Load More" callback={LoadMoreMovies} />
        )}
    </>
  );
};

export default Home;
