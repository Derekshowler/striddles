import React from 'react';
import NoImage from "../../components/assets/images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import styled from 'styled-components';

const StyledPeople = styled.div`
  font-family: 'Abel', sans-serif;
  color: #fff;
  background: #1c1c1c;
  border-radius: 20px;
  padding: 5px;
  text-align: center;

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
  }

  .person-name {
    display: block;
    font-size: 18px;
    margin: 10px 0 0 0;
  }

  .person-character {
    display: block;
    font-size: 16px;
    margin: 0 0 10px 0;
  }
`;

const People = ({ actor }) => (
    <StyledPeople>
      <img 
        src={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage
        }
        alt="actorthumb"
      />
      <span className="person-name">{actor.name}</span>
      <span className="person-character">{actor.character}</span>
    </StyledPeople>
  );
  
  export default People;
  