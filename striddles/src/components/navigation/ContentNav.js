import React from 'react';
//import { Link } from 'react-router-dom';
import { Router, Link } from '@reach/router';
import styled from 'styled-components';

const StyledNavigation = styled.div`
  display: absolute;
  align-items: center;
  max-width: 1280px;
  height: 70px;
  background: rgb(10, 10, 10, 0);
  color: #000;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  
  .HomeUnderline {
        text-decoration: underline;
      }

  .navigation-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    border-radius: 10%;
    background-color: rgba(0, 0, 0, 0.808);

    p {
      font-family: 'Abel', sans-serif;
      font-size: 22px;
      float: left;
      color: #fff;
      padding-right: 10px;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;

const ContentNav = ({ dataId }) => (
  <StyledNavigation>
    <div className="navigation-content">
      <Link to="/">
        <p className = 'HomeUnderline'>Home</p>
      </Link>
      <p>|</p>
      <p>{dataId}</p>
    </div>
  </StyledNavigation>
);

export default ContentNav;