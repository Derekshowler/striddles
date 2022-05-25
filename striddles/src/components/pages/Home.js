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
import { useSeriesFetch } from "../hooks/useSeriesFetch";
import { useMovieFetch } from "../hooks/useMovieFetch";
import NoImage from "../../components/assets/images/no_image.jpg";

const Home = () => {
  //API Fetch for Series and Search + Load More
  const [
    {
      series: { 
        dataTV, 
        currentPages, 
        totalPages, 
      },
      loading,
      errors,
    },
    popularSeries,
  ] = useSeriesFetch();
  
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = (search) => {
    const endpoint = search ? SEARCH_BASE_URL + search : TRENDING_TV_URL;
    setSearchTerm(search);
    popularSeries(endpoint);
  };
  
  const loadMoreSeries = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPages + 1}`;
    const trendingSeriesEndpoint = `${TRENDING_TV_URL}&page=${currentPages + 1}`;
    const endpoint = searchTerm ? searchEndpoint : trendingSeriesEndpoint;
    popularSeries(endpoint);
  };

  //API Fetch for Movies + Load More
  const [
    {
      movies: {
        data,
        heroImage,
        currentPage,
        totalPage,
      },
      loadingMore,
      error,
    },
    popularMovies,
  ] = useMovieFetch();

  const loadingMovies = () => {
    const nextPage = `${TRENDING_MOVIE_URL}&page=${currentPage + 1}`;
    popularMovies(nextPage);
  };

  //Make sure we have data and no errors
  if (errors) return <div>Something went wrong with Series...</div>;
  if (error) return <div>Something went wrong with Movies...</div>;
  if (!dataTV[0]) return <Spinner />;
  if (!data[0]) return <Spinner />;

  
  //  Grid sections for:
  //  Hero image, trending tv, trending movies
  //  
  return (
    <>
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          clickable
          nameId={heroImage.name}
          fetchDetails={encodeURIComponent(heroImage.media_type + "/" + heroImage.id)}
          originalName={heroImage.name}
          originalTitle={heroImage.title}
          title={heroImage.original_name}
          text={heroImage.overview}
        />

      <Grid header={"Trending TV:"}>
        {dataTV.map((dataId) => (
          <Card
            key={dataId.id}
            clickable={true}
            image={
              dataId.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${dataId.poster_path}`
                : NoImage
            }
            voteAverage={dataId.vote_average}
            fetchDetails={encodeURIComponent(dataId.media_type + "/" + dataId.id)}
            name={dataId.name}
          />
        ))}
        {loading && <Spinner />}
        {currentPages < totalPages && !loading && (
          <LoadMoreBtn text="Load More" callback={loadMoreSeries} />
        )}
      </Grid>

      <Grid header="Trending Movies:">
        {data.map((movieId) => (
          <Card
            key={movieId.id}
            clickable={true}
            image={
              movieId.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movieId.poster_path}`
                : NoImage
            }
            voteAverage={movieId.vote_average}
            fetchDetails={encodeURIComponent(movieId.media_type + "/" + movieId.id)}
            fetchContentName={movieId.name}
            originalName={movieId.name}
            originalTitle={movieId.title}
            fetchMediaType={movieId.media_type}
          />
        ))}
        {loadingMore && <Spinner />}
        {currentPage < totalPages && !loading && (
          <LoadMoreBtn text="Load More" callback={loadingMovies} />
        )}
      </Grid>
    </>
  );
};

export default Home;
