import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 10px;

  .header-content {
    max-width: 1280px;
    min-height: 55px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }

    .striddlesHomeLink {
        width: 250px;
        margin-top: 20px;
        font-size: 35px;
        font-family: 'Caveat', cursive;
        text-shadow: 3px 3px 3px black;
        color: #00adb5;
        text-decoration: none;
        padding: 8px;
        border-radius: 20px;

        @media screen and (max-width: 500px) {
            width: 150px;
            margin-top: 5px;
        }

        :hover {
            opacity: 0.8;
            box-shadow: 0 4px 2rem -4px #FFFFFF;
            transform: translateY(-3px);
        }
    }
`;

const StyledNavButton = styled.button `
    background: ${props => props.primary ? "#00adb5" : "#eeeeee"};
    color: ${props => props.primary ? "#eeeeee" : "#00adb5"};
    margin: 5px;
    padding: 0.2em .6em;
    border: 2px solid #00adb5;
    border-radius: 3px;
    float: right;
    text-decoration: none;
    font-family: 'Caveat', cursive;
    font-size: 20px;

    @media screen and (max-width: 500px) {
        display: inline-block;
        width: 80px;
        margin-top: 0px;
    }

    :hover {
      opacity: 0.8;
      box-shadow: 0 4px 2rem -4px #FFFFFF;
      transform: translateY(-3px);
    }
`;

const StyledStriddlesLogo = styled.img`
  width: 250px;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
  }
`;

const StyledTMDBLogo = styled.img`
  width: 122px;
  margin-top: 25px;
  float: right;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;


const Navbar = () => (
        <StyledHeader>
            <div className = "header-content">
                <a className = "striddlesHomeLink" href = "/">Striddles</a>
                <StyledNavButton primary as="a" href="/login">Login</StyledNavButton>
                <StyledNavButton as="a" href="/register">Register</StyledNavButton>
            </div>
        </StyledHeader>
    );

export default Navbar;