import React, { Component } from 'react';
import axios from 'axios';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pictures: []
         };
         this.renderPictures = this.renderPictures.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:8080/pictures')
            .then(res => {
                // console.log(res);
                res.data.map(i => {
                    this.setState({
                        pictures: [...this.state.pictures, i]
                    })
                })
            })
            .catch(err => console.log(err));
    }
    renderPictures() {

        return this.state.pictures.map((i, ind) => {
            var filterStringBuildFromData = (i) => {
                var string = '';
                if (i.grayscale !== null) {
                    string += `grayscale(${i.grayscale}) `
                } 
                if (i.saturate !== null) {
                    string += `saturate(${i.saturate}%) `
                }
                if (i.blur !== null) {
                    string += `blur(${i.blur}px) `
                }
                if (i.sepia !== null) {
                    string += `sepia(${i.sepia}) `
                }
                if (i.hueRotate !== null) {
                    string += `hue-rotate(${i.hueRotate}deg) `
                }
                if (i.brightness !== null) {
                    string += `brightness(${i.brightness}%) `
                }
                if (i.contrast !== null) {
                    string += `contrast(${i.contrast}) `
                }
                if (i.invert !== null) {
                    string += `invert(${i.invert}) `
                }
                if (i.opactiy !== null) {
                    string += `invert(${i.opacity}) `
                }

                return string.trim();
            }

            console.log(`grayscale(${i.grayscale}) saturate(${i.saturate}) blur(${i.blur}) sepia(${i.sepia}) hue-rutate(${i.hueRotate}) brightness(${i.brightness}) contrast(${i.contrast}) invert(${i.invert}) opacity(${i.opacity})`)
            var style = {
                border: '2px solid green',
                filter:  filterStringBuildFromData(i)
            }
            console.log(style)
            return <img key={ind} src={i.pictureUrl} width="400px" style={style} />
        })
    }

    render() {
        return (
            <div>
                <h1>Gallery</h1>
                { (this.state.pictures.length < 0 ? null : this.renderPictures()) }
            </div>
        )

    }
}

export default Gallery;