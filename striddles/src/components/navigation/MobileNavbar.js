import React from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';


const MobileNavbarStyled = styled.nav `
  
  width: 50vw;
  background: green;
  align-self: flex-end;

  .navLinks {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;

    height: 30vw;

    list-style: none;
  }

  .link {
    color: white;
    font-size: 2.5vh;
    text-decoration: none;
  }
`;


const MobileNavbar = () => {
  return (
    <MobileNavbarStyled>
        <NavLinks/>
    </MobileNavbarStyled>
  );
}

export default MobileNavbar;