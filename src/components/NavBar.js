import React, { Component } from 'react';
import './NavBar.css';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

class NavBar extends Component {

    render() {
        return (
            <nav className="navBar">
                <ul className="container">
                    <StyledLink to='/' style={{flex: 1, textDecoration: 'none'}}><li className="navTitle">Photo Editor</li></StyledLink>
                </ul>
            </nav>
        );
    }
}

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        color: white;
        text-decoration: none;
    }
`;
export default NavBar;