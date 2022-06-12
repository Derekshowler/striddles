import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";
import {CardContainer, CardImg, CardTitle, CardTitleContainer} from "../../_styles/component_styles/utility_styles/card";

const Card = ({
  image,
  fetchDetails,
  name,
  originalTitle,
  }) => (
    <Link to={`${fetchDetails}`}>
    <CardContainer>
      <CardImg className="clickable" src={image} alt="card" />
      <CardTitleContainer>
        <CardTitle>
          {name}
          {originalTitle}
        </CardTitle>
      </CardTitleContainer>
    </CardContainer>
    </Link>
  );

Card.propTypes = {
  image: PropTypes.string,
  fetchDetails: PropTypes.string,
  clickable: PropTypes.bool,
};

export default Card;
