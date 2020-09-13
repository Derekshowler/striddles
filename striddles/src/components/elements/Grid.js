import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  h1 {
    font-family: 'Caveat', cursive;
    color: white;
    padding: 20px;
    font-size: 42px;

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  grid-gap: 40px;
  position: relative;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;



const Grid = ({ header, children }) => (
    <StyledGrid>
        <h1>{header}</h1>
        <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>
)

export default Grid;