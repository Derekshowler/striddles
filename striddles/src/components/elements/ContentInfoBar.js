import React from 'react';
import styled from 'styled-components';
import { calcTime, convertMoney } from '../../helpers';

const Container = styled.div`
    margin: 0 auto;
    border-radius: 20px;
    position: relative;
    color: #fff;

    @media screen and (max-width: 768px) {
      .fa-time,
      .fa-revenue,
      .fa-budget {
        display: none;
      }
    }
  
    @media screen and (max-width: 425px) {
      font-size: 14px;
    }
`;

const DescriptionHeader3 = styled.h3`
    font-size: 16px;
    line-height: 0;
    margin-top: 30px;
    margin-right: 5px;
`;

const RuntimeContainer = styled.div`
    color: #fff;
    overflow-x: auto;
    position: relative;
`;

const Runtime = styled.div`

`;

const RuntimeInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0 0 0;
`;

const Budget = styled.div`
    margin: 45px 400px 0 0;
`;

const BudgetContainer = styled.div`

`;

const BudgetInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0 10px 0;
`;

const GenreContainer = styled.div`

`;

const Genre = styled.div`
    
`

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
  