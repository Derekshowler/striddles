import React from 'react';
import styled from 'styled-components';

const StyledLoadMoreBtn = styled.button`
  background: #056676;
  width: 12%;
  min-width: 100px;
  height: 40px;
  color: #e8ded2;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 40px;
  font-family: 'Caveat', cursive;
  font-size: 30px;
  max-width: 1280px;
  display: block;
  margin: 20px auto;
  padding: 0 20px;
  outline: none;

  :hover {
    opacity: 0.8;
    box-shadow: 0 4px 2rem -4px #FFFFFF;
    transform: translateY(-2px);
  }
`;


const LoadMoreBtn = ({ text, callback }) => (
  <StyledLoadMoreBtn type="button" onClick={callback}>
    {text}
  </StyledLoadMoreBtn>
)

export default LoadMoreBtn;