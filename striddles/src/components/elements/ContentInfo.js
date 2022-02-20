import React from "react";
import PropTypes from "prop-types";

import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../config";

import Card from "./Card";
import NoImage from "../../components/assets/images/no_image.jpg";
import styled from "styled-components";
import ContentNav from "../../components/navigation/ContentNav";

const StyledContentInfo = styled.div`
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
  
 
  .contentinfo-content {
    max-width: 1280px;
    min-height: 550px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 20px;
    position: relative;
  }

  .contentinfo-card {
    width: 300px;
    float: left;

    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
  }

  .contentinfo-text {
    font-family: Arial, Helvetica, sans-serif;
    padding: 40px;
    color: #fff;
    overflow: hidden;

    h1 {
      font-family: "Abel", sans-serif;
      font-size: 48px;
      margin: 0;

      @media screen and (max-width: 1000px) {
        font-size: 32px !important;
      }
    }

    h3 {
      font-size: 16px;
      line-height: 0;
      margin-top: 30px;
    }

    p {
      font-family: "Abel", sans-serif;
      font-size: 18px;
      line-height: 26px;
      margin: 15px 0 0 0;
    }
  }

  .rating-director {
    display: flex;
    justify-content: flex-start;
  }

  .score {
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
  }

  .release{
    font-family: "Abel", sans-serif;
    font-size: 18px;
    line-height: 26px;
    margin: 15px 0 0 0;
  }

  .release_container{
    position: absolute;
    border-radius: 10%;
    color: #fff;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

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

const StyledContentInfoCard = styled.div`
  flex: 1 0 250px;
  box-shadow: 0 1px 1rem -4px #000;
  margin: 1rem;
  overflow: hidden;
  border-radius: 6px;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  :hover {
    opacity: 0.8;
    box-shadow: 0 4px 2rem -4px #ffffff;
    transform: translateY(-3px);
  }
`;


const ContentInfo = ({ state }) => (
  <>
  <StyledContentInfo backdrop={state.backdrop_path}>   
    <div className="contentinfo-content">
    <ContentNav dataId={state.name || state.title}></ContentNav>
      <div className="contentinfo-card">
        <Card
          image={
            state.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${state.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="cardthumb"
        />
      </div>
      <div className="contentinfo-text">
        <h1>{state.title || state.name}</h1>
        <h3>PLOT</h3>
        <p>{state.overview}</p>

        <div className="rating-director">
          <div>
            <h3>RATING</h3>
            <div className="score">{state.vote_average}</div>
          </div>
        </div>

        <div className ="release_container">
          <div>
            <h3>RELEASE DATE:</h3>
            <div className = "release">{state.release_date}{state.first_air_date}</div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentInfo>
  </>
);

export default ContentInfo;
