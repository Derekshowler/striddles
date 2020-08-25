import React from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import mobileNavIcon from '../assets/images/mobileNavButton.svg';

const DesktopNavbarStyled = styled.nav `
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    background: #2d545e;
    color: white;

    height: 10vh;

    .logo {
        font-size: 7vh;
        font-weight: bold;
        font-family: 'Roboto Mono', monospace;
        text-shadow: 3px 3px 3px black;
        
    }

    .navLinks {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;

        list-style: none;

        width: 35vw;
    }

    .link {
        color: white;
        font-size: 2.5vh;
        text-decoration: none;
    }
`;

const MobileNavButtonStyled = styled.button `
    background: transparent;
    border: none;
    height: 6vh;
    width: 6vh;
    color: white;
`;

const DesktopNavbar = () => {
    return (
        <DesktopNavbarStyled>
            <div className = "logo">Striddles</div>

            <NavLinks></NavLinks>

        </DesktopNavbarStyled>
    )
}

export default DesktopNavbar;