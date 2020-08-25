import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <ul className="navLinks">
            <li>
                <Link to="/" className="link">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/login" className="link">
                    Login
                </Link>
            </li>
            <li>
                <Link to="/register" className="link">
                    Register
                </Link>
            </li>
        </ul>
    );
};

export default NavLinks;
