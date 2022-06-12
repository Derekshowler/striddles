import styled from "styled-components";
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../../config";

const DetailsContainer = styled.div`
    background: ${(props) =>
      props.backdrop
        ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
        : "#056676"};
    background-size: 100%, cover !important;
    max-width: 1280px;
    min-height: 450px;
    margin: 0 auto;
    border-radius: 20px;
    border: 1px solid #D82148;
    position: relative;
    animation: animateHeroimage 1s;
`;

const DetailsCard = styled.div`
    width: 300px;
    float: left;
    margin: 55px 30px 0 70px;

    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
`;

const DetailsInfo = styled.div`
    max-width: 1280px;
    min-height: 550px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 20px;
    position: relative;
    @media screen and (max-width: 768px) {
      min-height: 600px;
      height: auto;
    }
  
    @keyframes animateMovieinfo {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
`;

const DetailsVideo = styled.div`
    margin: 0 auto;
    background-color: black;
`

const DetailsHeader1 = styled.h1`
    font-family: "Abel", sans-serif;
    line-height: 55px;
    font-size: 48px;
    margin: 60px 0 0 0;

    @media screen and (max-width: 1000px) {
      font-size: 32px !important;
    }
`;

const DetailsHeader3 = styled.h3`
    font-size: 16px;
    line-height: 0;
    margin-top: 30px;
    margin-right: 5px;
`;

const DetailsParagraph = styled.p`
    font-family: "Abel", sans-serif;
    font-size: 18px;
    line-height: 26px;
    margin: 15px 25px 0 0px;
`;

const DetailsText = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    line-height: 26px;
    margin: 15px 25px 10px 0px;
    color: #fff;
    overflow: auto;
`;

const DetailsRatingContainer = styled.div`
    color: #fff;
    overflow-x: auto;
    position: relative;
    display: flex;
`;

const DetailsRating = styled.div`

`;

const DetailsScore = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 25px;
    margin: 15px 0 0 0;
    margin-right: 50px;
`;

const DetailsDateContainer = styled.div`
    border-radius: 10%;
    color: #fff;
`;

const DetailsDate = styled.div`

`;

const DetailsRelease = styled.div`
    font-family: "Abel", sans-serif;
    font-size: 18px;
    line-height: 26px;
    margin: 15px 0 0 0;    
`;

export { 
    DetailsContainer,
    DetailsInfo, 
    DetailsCard, 
    DetailsText, 
    DetailsRatingContainer,
    DetailsRating,
    DetailsHeader3,
    DetailsHeader1,
    DetailsScore,
    DetailsRelease,
    DetailsParagraph,
    DetailsDate,
    DetailsVideo,
}