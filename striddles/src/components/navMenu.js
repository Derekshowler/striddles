import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



function navMenu() {
    const pathname = window.location.pathname;
  
    const path = pathname === '/' ? 'home' : pathname.substr(1);
    const [activeItem, setActiveItem] = useState(path);
  
    const handleItemClick = (e, { name }) => setActiveItem(name);
  
    return (
      <Menu pointing secondary size="massive" color="teal">
        <Menu.Item
          name="Striddle"
          active={activeItem === 'home'}
          onClick={handleItemClick}
          as={Link}
          to="/"
        />
  
        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            active={activeItem === 'login'}
            onClick={handleItemClick}
            as={Link}
            to="/login"
          />
          <Menu.Item
            name="register"
            active={activeItem === 'register'}
            onClick={handleItemClick}
            as={Link}
            to="/register"
          />
        </Menu.Menu>
      </Menu>
    );
  }
  
  export default navMenu;