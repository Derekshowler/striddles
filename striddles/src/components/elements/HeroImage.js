import React from "react";
import { StyledHeroImage } from "../../_styles/component_styles/utility_styles/hero";
import { Router, Link } from "@reach/router";

const HeroImage = ({
  image,
  fetchDetails,
  originalName,
  originalTitle,
  text,
}) => (
  <Link to = {`${fetchDetails}`} >
    <StyledHeroImage image={image}>
      <div className="heroimage-content">
        <div className="heroimage-text">
          <h1 className="name">
            {originalName} {originalTitle}
          </h1>
          <p>{text}</p>
        </div>
      </div>
    </StyledHeroImage>
  </Link>
);

export default HeroImage;
