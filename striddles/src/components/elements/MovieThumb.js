import React from 'react';
import styled from 'styled-components';

const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    /* min-height: 340px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateMovieThumb 0.5s;

    :hover {
      opacity: 0.8;
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



const MovieThumb = ({ image, movieId, clickable }) => (
    <StyledMovieThumb>
      {clickable ? (
        <img className="clickable" src={image} alt="moviethumb" />
      ) : (
        <img src={image} alt="moviethumb" />
      )}
    </StyledMovieThumb>
  )
  
  export default MovieThumb;

export default MovieThumb;