import React from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import mobileNavIcon from '../assets/images/mobileNavButton.svg';

const DesktopNavbarStyled = styled.nav `
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: end;
    
    background: #2d545e;
    color: white;

    height: 5vh;

    .navLinks {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: end;
        margin: 5px;
        list-style: none;
        font-family: 'Caveat', cursive;
        width: 35vw;
    }

    .link {
        color: white;
        font-size: 2.5vh;
        text-decoration: none;
    }
`;

const LogoStyled = styled.div `
        margin: 5px;
        align-content: left;

        .textLink {
            font-size: 2.5vh;
            font-family: 'Caveat', cursive;
            text-shadow: 3px 3px 3px black;
            color: white;
            text-decoration: none;
        }

`;

const DesktopNavbar = () => {
    return (
        <DesktopNavbarStyled>
            <LogoStyled>
                <a className = "textLink" href = "/">Striddles</a>
            </LogoStyled>
            <NavLinks></NavLinks>

        </DesktopNavbarStyled>
    )
}

export default DesktopNavbar;