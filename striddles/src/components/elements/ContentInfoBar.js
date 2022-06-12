import React from 'react';
import { calcTime, convertMoney } from '../../helpers';
import {
  Container,
  RuntimeContainer,
  Runtime,
  DescriptionHeader3,
  RuntimeInfo,
  BudgetContainer,
  BudgetInfo,
  Budget,
  Genre,
  GenreContainer
}
from "../../_styles/component_styles/element_styles/content_details_bar";

const ContentInfoBar = ({ time, budget, genres }) => (
    <>
      <Container className = "runtime_container">
        <RuntimeContainer>
        <Runtime className = "runtime">
          <DescriptionHeader3>Length:</DescriptionHeader3>
          <RuntimeInfo className = "runtime_span">{calcTime(time)}</RuntimeInfo>
        </Runtime>
        </RuntimeContainer>
        <BudgetContainer>
        <Budget className = "budget">
            <DescriptionHeader3>Budget:</DescriptionHeader3>
            <BudgetInfo>{convertMoney(budget)}</BudgetInfo>
        </Budget>
        </BudgetContainer>
        <GenreContainer>
            <Genre>
              
            </Genre>
          </GenreContainer>
      </Container>
    </>
  );
  
  export default ContentInfoBar;
  