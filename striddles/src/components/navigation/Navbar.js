import React, { useState } from "react";
import styled from 'styled-components';
import SearchBar from '../elements/SearchBar';

import {
  TRENDING_MOVIE_URL,
  TRENDING_TV_URL,
  SEARCH_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
} from "../../config";


import { useHomeFetch } from "../../components/hooks/useHomeFetch";
import { useMovieFetch } from "../hooks/useMovieFetch";
import NoImage from "../../components/assets/images/no_image.jpg";
import Grid from "../elements/Grid";
import Card from "../elements/Card";
import Spinner from "../elements/Spinner";
import LoadMoreBtn from "../elements/LoadMoreBtn";

const StyledHeader = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  background-color: #e8ded2;
  border: 2px solid #056676;
  border-radius: 10px;

  .header-content {
    max-width: 1280px;
    min-height: 55px;
    padding: 20px 0px;
    margin: 0 auto;
    display: flex;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }

    .striddlesHomeLink {
        width: 250px;
        font-size: 35px;
        font-family: 'Caveat';
        color: #056676;
        text-decoration: none;
        padding: 8px;
        border: 2px solid #056676;
        border-radius: 3px;

        @media screen and (max-width: 500px) {
            width: 150px;
        }

        :hover {
            opacity: 0.8;
            box-shadow: 0 4px 2rem -4px #FFFFFF;
            transform: translateY(-3px);
        }
    }
`;

const StyledNavButton = styled.button `
    background: ${props => props.primary ? "#056676" : "#eeeeee"};
    color: ${props => props.primary ? "#eeeeee" : "#056676"};
    margin: 5px;
    padding: 0.6em 1em;
    border: 2px solid #056676;
    border-radius: 3px;
    float: right;
    text-decoration: none;
    font-family: 'Caveat', cursive;
    font-size: 20px;

    @media screen and (max-width: 500px) {
        display: inline-block;
        width: 80px;
        margin-top: 0px;
    }

    :hover {
      opacity: 0.8;
      box-shadow: 0 4px 2rem -4px #FFFFFF;
      transform: translateY(-3px);
    }
`;

const StyledStriddlesLogo = styled.img`
  width: 250px;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
  }
`;

const StyledTMDBLogo = styled.img`
  width: 122px;
  margin-top: 25px;
  float: right;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;


const Navbar = () => {

  const [
    {
      state: { TV_Data, currentPage, totalPages },
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

  return (
    <>
    <StyledHeader>
        <div className = "header-content">
            <a className = "striddlesHomeLink" href = "/">Striddles</a>
            <SearchBar callback={searchMovies}></SearchBar>
            <StyledNavButton primary as="a" href="/login">Login</StyledNavButton>
            <StyledNavButton as="a" href="/register">Register</StyledNavButton>
        </div>
    </StyledHeader>

    <Grid header={searchTerm}>
    
    {!searchTerm || (
      TV_Data.map((dataId) => (
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
        ))
        )}
        
        {!searchTerm || currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load More" callback={loadMoreSeries} />
        )}
    </Grid>
  </>
  );
};

export default Navbar;