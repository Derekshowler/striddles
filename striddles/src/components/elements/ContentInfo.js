import React from "react";
import PropTypes from "prop-types";
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../config";
import Card from "./Card";
import NoImage from "../../components/assets/images/no_image.jpg";
import styled from "styled-components";
import ContentNav from "../../components/navigation/ContentNav";
import Grid from "../elements/Grid";
import ContentInfoBar from "./ContentInfoBar";
import Actor from "../elements/ActorProfile";

const DetailsContainer = styled.div`
    background: ${(props) =>
      props.backdrop
        ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
        : "#056676"};
    background-size: cover !important;
    background-position: center !important;
    width: 100%;
    padding: 40px 20px;
    box-sizing: border-box;
    animation: animateMovieinfo 1s;
    max-width: 1280px;
    min-height: 450px;
    margin: 0 auto;
    border-radius: 20px;
    position: relative;
    margin-bottom: 50px;
`;

const DetailsCard = styled.div`
    width: 300px;
    float: left;
    margin: 55px 30px 0 70px;

    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
`;

const DetailsInfo = styled.div`
    max-width: 1280px;
    min-height: 550px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 20px;
    position: relative;
    @media screen and (max-width: 768px) {
      min-height: 600px;
      height: auto;
    }
  
    @keyframes animateMovieinfo {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
`;

const DetailsHeader1 = styled.h1`
    font-family: "Abel", sans-serif;
    line-height: 55px;
    font-size: 48px;
    margin: 60px 0 0 0;

    @media screen and (max-width: 1000px) {
      font-size: 32px !important;
    }
`;

const DetailsHeader3 = styled.h3`
    font-size: 16px;
    line-height: 0;
    margin-top: 30px;
    margin-right: 5px;
`;

const DetailsParagraph = styled.p`
    font-family: "Abel", sans-serif;
    font-size: 18px;
    line-height: 26px;
    margin: 15px 25px 0 0px;
`;

const DetailsText = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    line-height: 26px;
    margin: 15px 25px 10px 0px;
    color: #fff;
    overflow: auto;
`;

const DetailsRatingContainer = styled.div`
    color: #fff;
    overflow-x: auto;
    position: relative;
    display: flex;
`;

const DetailsRating = styled.div`

`;

const DetailsScore = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 25px;
    margin: 15px 0 0 0;
    margin-right: 50px;
`;

const DetailsDateContainer = styled.div`
    border-radius: 10%;
    color: #fff;
`;

const DetailsDate = styled.div`

`;

const DetailsRelease = styled.div`
    font-family: "Abel", sans-serif;
    font-size: 18px;
    line-height: 26px;
    margin: 15px 0 0 0;    
`;


const ContentInfo = ({ state, time, budget, genres }) => (
  <>
    <ContentNav className = "Content Nav" dataId={state.name || state.title}></ContentNav>
    <DetailsContainer className = "details_container" backdrop={state.backdrop_path}></DetailsContainer>
    <DetailsInfo className = "details_info">
          <DetailsCard className = "details_card">
            <Card
              image={
                state.poster_path 
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${state.poster_path}` 
                  : NoImage
                }
              alt="cardthumb"
            />
          </DetailsCard>
          <DetailsText className = "details_text">
              <DetailsHeader1 className = "details_header1">{state.title || state.name}</DetailsHeader1>
              <DetailsHeader3 className = "details_header3">PLOT</DetailsHeader3>
              <DetailsParagraph>{state.overview}</DetailsParagraph>
            </DetailsText>
          <DetailsRatingContainer className = "details_rating_container">  
            <DetailsRating className = "details_rating">
                <DetailsHeader3 className = "details_header3">Rating:</DetailsHeader3>
                <DetailsScore className = "details_score">{state.vote_average}</DetailsScore>
              <DetailsDate className = "details_date">
                <DetailsHeader3 className = "deatils_header3">Release Date:</DetailsHeader3>
                <DetailsRelease className = "details_release">{state.release_date}{state.first_air_date}</DetailsRelease>
              </DetailsDate>
            </DetailsRating>
            <ContentInfoBar time={state.runtime || state.episode_run_time} budget={state.budget} genre={state.genres}/>
          </DetailsRatingContainer>
      </DetailsInfo>
      <Grid header = "Actors"> 
          {state.actors.map((element, i) => (
            <Actor key={i} actor={element} />
          ))} 
      </Grid>
      {/* <Grid header="You may also like:">
        {state.similiar.map((movieId) => (
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
      </Grid> */}
  </>
);

export default ContentInfo;
