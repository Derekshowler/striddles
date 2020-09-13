import React from "react";
import styled from "styled-components";

const MovieTitle = styled.h1`

  font-family: 'Caveat', cursive;
  margin: 1rem;
  color: ${props => (props.main ? "white" : "#264653")};
  text-align: center;
`;

export default MovieTitle;
