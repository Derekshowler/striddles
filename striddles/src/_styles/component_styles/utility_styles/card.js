import styled from "styled-components";

const CardContainer = styled.div`
    width: 15vw;
    height: 20vw;
    position: relative;
    flex: 0 0 9%;
    display: flex;
    justify-content: space-around;
    margin: 1.55vw 1vw;
    background: #D82148;
    border-radius: 20px;
    padding: 5px;
    
    transition: transform;
    transition-duration: 0.25s;
    color: white;
    :hover {
      cursor: pointer;
      transform: scale(1.08);
    }
    @media screen and (max-width: 3000px) {
      flex: 0 0 10%;
    }
    @media screen and (max-width: 2000px) {
      flex: 0 0 13%;
    }
    @media screen and (max-width: 1440px) {
      flex: 1 0 15%;
    }
    @media screen and (max-width: 1025px) {
      flex: 1 0 25%;
    }
    @media screen and (max-width: 640px) {
      flex: 1 0 25%;
    }
    @media screen and (max-width: 361px) {
      flex: 1 0 33%;
    }
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%; 
  border-radius: 20px;
`;

const CardRating = styled.div`

`

const CardTitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0.25rem;
  padding: 0.3rem;
  border-radius: 10%;
  background-color: rgba(0, 0, 0, 0.808);
`;

const CardTitle = styled.span`
    font-family: "Abel", sans-serif;
    font-size: 18px;
    line-height: 26px;
    margin: 15px 0 0 0;
`;

export {CardContainer, CardImg, CardTitle, CardTitleContainer}