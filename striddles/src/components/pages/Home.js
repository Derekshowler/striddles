import React, { useState } from 'react';
import {
  API_URL,
  API_KEY,
  API_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE, IMAGE_BASE_URL
} from '../../config';

//import components we want to use on this page..
import SearchBar from '../elements/SearchBar';
import Grid from '../elements/Grid';
import MovieThumb from '../elements/MovieThumb';
import Spinner from '../elements/Spinner';
import LoadMoreBtn from '../elements/LoadMoreBtn';
import HeroImage from '../elements/HeroImage';

//import custom hook
import { useHomeFetch } from '../../components/hooks/useHomeFetch';

import NoImage from '../../components/assets/images/no_image.jpg';

const Home = () => {
  const [
    { 
      state: {movies, currentPage, totalPages, heroImage}, 
      loading, 
      error,
    }, 
    fetchMovies
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState('');

  if (error) return <div>Something Went Wrong ...</div>;
  if (!movies[0]) return <Spinner />;
  

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.name}
        text={heroImage.overview}
      />
      <SearchBar />
      <Grid header={searchTerm ? 'Search Result' : 'Trending TV Shows'}>
        {movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </>
  );
};

export default Home;