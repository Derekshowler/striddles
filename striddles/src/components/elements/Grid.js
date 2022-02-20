import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GridContainer = styled.div`

`

const GridRow = styled.div`

`

const GridColumn = styled.div`

`


const StyledGrid = styled.div`
  padding: 10px;
  h1 {
    font-family: 'Caveat', cursive;
    color: #eeeeee;
    padding: 20px;
    font-size: 37px;

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

const StyledGridContent = styled.div`
  display: flex;
  overflow-x: auto;
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

  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
      background: #FF0000;
  }
`;



const Grid = ({ header, children }) => (
    <StyledGrid>
        <h1>{header}</h1>
        <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>
)

Grid.propTypes = {
  header: PropTypes.string,
}

export default Grid;