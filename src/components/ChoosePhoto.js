import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import EditPhoto from './EditPhoto';
import './ChoosePhoto.css';
import styled from 'styled-components';


class ChoosePhoto extends Component {
    constructor() {
        super();
        this.state = {
            imageSelected: false
        }
        this.handleUpload = this.handleUpload.bind(this);
    }

    async handleUpload(e) {
    }

    render() {
        const photo = 'https://images.unsplash.com/photo-1496890666403-e6cf521841e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=78ea1745909c6a3c01509f07e9f6229d&auto=format&fit=crop&w=750&q=80';

        return (
            <div className="choosePhoto">
                {(!this.state.imageSelected) ? 
                <div className="btnContainer">
                    {/* <label className="uploadButton">UPLOAD IMAGE</span>
                    <input type="file" id="fileupload" onCHange
                    <label className="uploadButton">UPLOAD IMAGE</ */}
                    <label type="file" id="file" className="inputfile">
                        <input type="file" onClick={this.handleUpload} className="upload" />
                        UPLOAD PHOTO
                    </label>
                    <button onClick={() => this.setState({imageSelected: true})} className="random">RANDOM PHOTO</button>
                </div> : 
                <EditPhoto image={photo} />
                }
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