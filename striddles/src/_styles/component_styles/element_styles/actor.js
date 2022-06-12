import styled from 'styled-components';

const StyledActor = styled.div`
  font-family: 'Abel', sans-serif;
  color: #fff;
  background: #D82148;
  border-radius: 20px;
  padding: 5px;
  text-align: center;
  margin: 1.55vw 1vw;
  
  img {
    display: block;
    height: 20vw;
    width: 15vw;
    object-fit: cover;
    border-radius: 15px;
  }
  .actor-name {
    display: block;
    font-size: 18px;
    margin: 15px 0 0 0;
  }
  .as-actor {
    display: block;
    font-size: 18px;
    margin: 5px 0 0 0;
  }
  .actor-character {
    display: block;
    font-size: 16px;
    margin: 5px 0 10px 0;
  }
`;

export default StyledActor;