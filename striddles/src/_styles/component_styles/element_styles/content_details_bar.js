import styled from 'styled-components';

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

export {
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