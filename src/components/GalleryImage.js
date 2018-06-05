import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './GalleryImage.css'

class GalleryImage extends Component {
    constructor() {
        super();
        this.filterStringBuildFromData = this.filterStringBuildFromData.bind(this);
        //this.removePicture = this.removePicture.bind(this);
    }


    filterStringBuildFromData() {
        var string = '';
        if (this.props.grayscale !== null) {
            string += `grayscale(${this.props.grayscale}) `
        } 
        if (this.props.saturate !== null) {
            string += `saturate(${this.props.saturate}%) `
        }
        if (this.props.sepia !== null) {
            string += `sepia(${this.props.sepia}) `
        }
        if (this.props.hueRotate !== null) {
            string += `hue-rotate(${this.props.hueRotate }deg) `
        }
        if (this.props.brightness !== null) {
            string += `brightness(${this.props.brightness}%) `
        }
        if (this.props.contrast !== null) {
            string += `contrast(${this.props.contrast}) `
        }
        if (this.props.invert !== null) {
            string += `invert(${this.props.invert}) `
        }
        if (this.props.opacity !== null) {
            string += `opacity(${this.props.opacity}) `
        }
        return string.trim();
    }
    
    render() {
        
        return (
            // <div>
                <img className="galleryImage" src={this.props.pictureUrl} 
                    onClick={() => this.props.handleDelete(this.props.id)}
                    style={{ filter: this.filterStringBuildFromData()}} 
                    width="400px" 
                />
                //{/* <Link to={`/editPhoto/${this.props.id}`}><button>edit</button></Link> */}
               
            // </div>
        )

    }
}

export default GalleryImage;