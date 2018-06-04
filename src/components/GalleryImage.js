import React, { Component } from 'react';

class GalleryImage extends Component {
    constructor() {
        super();
        this.filterStringBuildFromData = this.filterStringBuildFromData.bind(this);
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
        var style = {
            filter:  this.filterStringBuildFromData,
            width: "400px"
        }
        console.log(this.filterStringBuildFromData())
        return (
            <div>
                {/* <h1>Gallery</h1> */}
                c
                <img src={this.props.pictureUrl} 
                    style={{ filter: this.filterStringBuildFromData()}} width="400px" 
                />
            </div>
        )

    }
}

export default GalleryImage;