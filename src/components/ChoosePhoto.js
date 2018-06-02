import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import EditPhoto from './EditPhoto';
import './ChoosePhoto.css';
import styled from 'styled-components';


class ChoosePhoto extends Component {

    render() {
        const photo = 'src/cat.jpg';

        return (
            <div className="choosePhoto">
                <div className="btnContainer">
                    <StyledLink to="/EditPhoto"><button className="upload">UPLOAD PHOTO</button></StyledLink> 
                    <button className="random">RANDOM PHOTO</button>
                </div>
            </div>
        );
    }
}
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default ChoosePhoto;