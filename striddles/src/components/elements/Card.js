import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  flex: 1 0 250px;
  box-shadow: 0 1px 1rem -4px #000;
  margin: 1rem;
  overflow: hidden;
  border-radius: 6px;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  .card-content {
  padding: 10px;
  color: #FFFFFF;
  }

  .name{
    font-family: 'Caveat', cursive;
    font-size: 22px;
  }

  img {
    width: 100%;
    /* min-height: 340px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateMovieThumb 0.5s;

    :hover {
      opacity: 0.8;
      box-shadow: 0 4px 2rem -4px #FFFFFF;
      transform: translateY(-3px);
    }

    .clickable {
      cursor: pointer;
    }

    @keyframes animateMovieThumb {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const Card = ({ image, seriesId, clickable, originalName, originalTitle, voteAverage }) => (
    <StyledCard>
      {clickable ? (
        <img className="clickable" src={image} alt="card" />
      ) : (
        <img src={image} alt="card" />
      )}
      <div className = "card-content">
      <span className = "name">{originalName} {originalTitle}</span>
        <br></br>
        <span>Rating: {voteAverage} / 10</span>
      </div>
    </StyledCard>
  )
  

export default Card;