import React from "react";
//import {Link} from 'react-router-dom';
import { Router, Link } from "@reach/router";

import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled.div`
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

  .card-content {
    padding: 10px;
    color: #ffffff;
    justify-content: auto;
  }

  h3 {
    font-size: 16px;
    line-height: 0;
    margin-top: 5px;
  }

  p {
    font-family: "Abel", sans-serif;
    font-size: 18px;
    line-height: 26px;
    margin: 15px 0 0 0;
  }

  img {
    width: 100%;
    /* min-height: 340px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateMovieThumb 0.5s;

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

//contentId comes from the grid setup on homepage where we initially grab the items
const Card = ({
  image,
  fetchContentId,
  clickable,
  name,
  originalTitle,
  voteAverage,
}) => (
  <Link to={`${fetchContentId}`}>
  <StyledCard>
    {clickable ? (
        <img className="clickable" src={image} alt="card" />
    ) : (
      <img src={image} alt="card" />
    )}
    <div className="card-content">
      <h3>{voteAverage} / 10</h3>
      <p className="name">
        {name} {originalTitle}
      </p>
    </div>
  </StyledCard>
  </Link>
);

Card.propTypes = {
  image: PropTypes.string,
  fetchContentId: PropTypes.string,
  clickable: PropTypes.bool,
};

export default Card;
