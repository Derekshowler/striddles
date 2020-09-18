import React, { useState } from 'react';
import {
  POPULAR_BASE_URL,
  TRENDING_TV_URL,
  SEARCH_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
} from '../../config';

//import components we want to use on this page..
import SearchBar from '../elements/SearchBar';
import Grid from '../elements/Grid';
import Card from '../elements/Card';
import Spinner from '../elements/Spinner';
import LoadMoreBtn from '../elements/LoadMoreBtn';
import HeroImage from '../elements/HeroImage';

//import custom hook
import { useHomeFetch } from '../../components/hooks/useHomeFetch';
import NoImage from '../../components/assets/images/no_image.jpg';

const Home = () => {
  const [
    {
      state: { series, currentPage, totalPages, heroImage, movies },
      loading,
      error,
    },
    fetchMovies,
    fetchTV,
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = search => {
  const endpoint = search ? SEARCH_BASE_URL + search : TRENDING_TV_URL;

    setSearchTerm(search);
    fetchMovies(endpoint);

  }

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
    const trendingSeriesEndpoint = `${TRENDING_TV_URL}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : trendingSeriesEndpoint;

    fetchMovies(endpoint);

  }


  if (error) return <div>Something went wrong ...</div>;
  if (!series[0]) return <Spinner />;

  return (
    <>
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_name}
          text={heroImage.overview}
        />
      )}
      <SearchBar callback={searchMovies} />
      <Grid header={searchTerm ? 'Search Result' : 'Trending TV Shows'}>
        {series.map(series => (
          <Card
            key={series.id}
            clickable
            image={
              series.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${series.poster_path}`
                : NoImage
            }
            seriesId={series.id}
            voteAverage={series.vote_average}
            originalName={series.original_name}
            originalTitle={series.original_title}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
      <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
      )}

    {!searchTerm && (
      <Grid header='Trending Movies'>
        {movies.map(movies => (
          <Card
            key={movies.id}
            clickable
            image={
              movies.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movies.poster_path}`
                : NoImage
            }
            moviesId={movies.id}
            voteAverage={movies.vote_average}
            originalName={movies.original_name}
            originalTitle={movies.original_title}
          />
        ))}
      </Grid>
    )}
    
    </>
  );
};

export default Home;