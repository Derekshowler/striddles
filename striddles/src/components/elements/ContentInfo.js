import React from 'react';
import PropTypes from 'prop-types';

import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';

import Card from './Card';
import NoImage from "../../components/assets/images/no_image.jpg";
import styled from 'styled-components';

const StyledContentInfo = styled.div`
  background: ${props =>
    props.backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
      : '#000'};
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  animation: animateMovieinfo 1s;

  .contentinfo-content {
    max-width: 1280px;
    min-height: 450px;
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
      font-family: 'Abel', sans-serif;
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
      font-family: 'Abel', sans-serif;
      font-size: 18px;
      line-height: 26px;
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
    margin: 0px 0 0 0;
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


const ContentInfo = ({ state }) => (
  <StyledContentInfo backdrop={state.backdrop_path}>
    <div className="contentinfo-content">
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
        <h1>{state.title}</h1>
        <h3>PLOT</h3>
        <p>{state.overview}</p>
     
        <div className="rating-director">
          <div>
            <h3>IMDB RATING</h3>
            <div className="score">{state.vote_average}</div>
          </div>
        </div>
      </div>
    </div>
  </StyledContentInfo>
);



export default ContentInfo;