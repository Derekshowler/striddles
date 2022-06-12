import React, { useState } from "react";
import styled from 'styled-components';
import SearchBar from '../elements/SearchBar';
import { useSearchFetch } from "../hooks/useSearchFetch";
import NoImage from "../../components/assets/images/no_image.jpg";
import Grid from "../elements/Grid";
import Card from "../elements/Card";
import Spinner from "../elements/Spinner";
import LoadMoreBtn from "../elements/LoadMoreBtn";
import {
  TRENDING_MOVIE_URL,
  TRENDING_TV_URL,
  SEARCH_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  SEARCH_BASE
} from "../../config";


const StyledHeader = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  background-color: #D82148;

  .header-content {
    max-width: 1280px;
    min-height: 25px;
    padding: 5px 0px;
    margin: 0 auto;
    display: flex;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }

    .striddlesHomeLink {
        width: 125px;
        font-size: 35px;
        font-family: 'Caveat';
        color: #151D3B;
        text-decoration: none;
        padding: 8px;
        border-radius: 10px;
        border: 1px solid #151D3B;
        
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
    padding: .3em 1em 0em 1em;
    border: 2px solid #056676;
    border-radius: 3px;
    float: right;
    text-decoration: none;
    font-family: 'Caveat', cursive;
    font-size: 25px;

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
      state: { searchData, currentPage, totalPages },
      loading,
      error,
    },
    getSearch,
  ] = useSearchFetch();
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = (search) => {
    const endpoint = search ? SEARCH_BASE_URL + search : SEARCH_BASE;
    setSearchTerm(search);
    getSearch(endpoint);
  };

  const loadMoreSeries = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
    const trendingSeriesEndpoint = `${SEARCH_BASE}&page=${currentPage + 1}`;
    const endpoint = searchTerm ? searchEndpoint : trendingSeriesEndpoint;
    getSearch(endpoint);
  };

  //  Grid Section & Header
  //  If no search term, the grid will not be shown
  return (
    <>
    <StyledHeader>
        <div className = "header-content">
            <a className = "striddlesHomeLink" href = "/">Striddles</a>
            <SearchBar callback={searchMovies}></SearchBar>
            {/* <StyledNavButton primary as="a" href="/login">Login</StyledNavButton>
            <StyledNavButton as="a" href="/register">Register</StyledNavButton> */}
        </div>
    </StyledHeader>

    <Grid header={searchTerm}>
      {!searchTerm || (
        searchData.map((fetchDetails) => (
            <Card
              key={fetchDetails.id}
              clickable
              image={
                fetchDetails.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${fetchDetails.poster_path}`
                : NoImage
              }
              voteAverage={fetchDetails.vote_average}
              fetchDetails={encodeURIComponent(fetchDetails.media_type + "/" + fetchDetails.id)}
              name={fetchDetails.title || fetchDetails.name}
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