import React from "react";
import PropTypes from "prop-types";
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../config";
import Card from "./Card";
import NoImage from "../../components/assets/images/no_image.jpg";
import ContentNav from "../../components/navigation/ContentNav";
import Grid from "../elements/Grid";
import ContentInfoBar from "./ContentInfoBar";
import Actor from "../elements/ActorProfile";
import Similiar from "../elements/Similiar";
import {
  DetailsContainer, 
  DetailsInfo, 
  DetailsCard, 
  DetailsText, 
  DetailsRatingContainer,
  DetailsRating,
  DetailsHeader3,
  DetailsHeader1,
  DetailsScore,
  DetailsRelease,
  DetailsParagraph,
  DetailsDate,
  DetailsVideo,
} 
from "../../_styles/component_styles/page_styles/content_details";


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

      <Grid header = "Similar">
        {state.similarMovies.map((similar) => (
            <Card
              key={similar.id}
              clickable={false}
              image={
                similar.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${similar.poster_path}`
                  : NoImage
              }
              name={similar.name}
            />
          ))}
      </Grid>
  </>
);

export default ContentInfo;
