import React from 'react';
import StyledLoadMoreBtn from '../../_styles/component_styles/element_styles/load_more';

const LoadMoreBtn = ({ text, callback }) => (
  <StyledLoadMoreBtn type="button" onClick={callback}>
    {text}
  </StyledLoadMoreBtn>
)

export default LoadMoreBtn;