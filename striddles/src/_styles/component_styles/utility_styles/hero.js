import styled from "styled-components";

const StyledHeroImage = styled.div`
background: ${(props) =>
  `linear-gradient(
    to bottom, rgba(0,0,0,0)
    39%,rgba(0,0,0,0)
    41%,rgba(0,0,0,0.65)
    100%
  ),
  url('${props.image}'), #056676`};
background-size: 100%, cover !important;
max-width: 1280px;
min-height: 450px;
margin: 0 auto;
border-radius: 20px;
border: 1px solid #D82148;
position: relative;
animation: animateHeroimage 1s;
cursor: pointer;

.heroimage-content {
  max-width: 1280px;
  padding: 20px;
  margin: 0 auto;
  color: #ffffff;
}

.heroimage-text {
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  background: rgba(0, 0, 0, 0);
  color: #fff;

  h1 {
    font-family: "Caveat", cursive;
    font-size: 42px;
    color: #fff;

    @media screen and (max-width: 720px) {
      font-size: 38px;
      color: #fff;
    }
  }

  p {
    font-family: "Abel", sans-serif;
    font-size: 22px;
    line-height: 26px;
    color: #fff;

    @media screen and (max-width: 720px) {
      font-size: 16px;
      line-height: 20px;
      color: #fff;
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
}

@keyframes animateHeroimage {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;

export {StyledHeroImage};