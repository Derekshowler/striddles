import React from "react";
import styled from "styled-components";

import MovieTitle from "./MovieTitle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 350px;
  background-color: #c4b2a9;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Description = styled.p`
  color: white;
  text-align: center;
`;

const Rating = styled.p`
    color: black;
    text-align: center;
`;

const Card = ({ title, description, rating }) => {
  return (
    <Wrapper>
      <MovieTitle>{title}</MovieTitle>
      <Description>{description}</Description>
      <Rating>{rating}</Rating>
    </Wrapper>
  );
};

export default Card;
