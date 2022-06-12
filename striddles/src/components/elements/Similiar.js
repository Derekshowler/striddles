import React from 'react';
import PropTypes from 'prop-types';
import NoImage from "../../components/assets/images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import StyledSimiliar from "../../_styles/component_styles/element_styles/similiar";

const Similiar = ({ similiar_movie }) => (
  <StyledSimiliar>
    <img
      src={
        similiar_movie.poster_path
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${similiar_movie.poster_path}`
          : NoImage
      }
      alt=""
    />
    <span className="movie-name">{similiar_movie.title}</span>
  </StyledSimiliar>
);

Similiar.propTypes = {
  similiar_movie: PropTypes.object,
};

export default Similiar;