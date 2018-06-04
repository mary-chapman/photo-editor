import React, { Component } from 'react';
import axios from 'axios';

import GalleryImage from './GalleryImage';

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
                    console.log(res.data)
                    this.setState({
                        pictures: [...this.state.pictures, i]
                    })
                })
            })
            .catch(err => console.log(err));
    }
    renderPictures() {
        console.log(this.state.pictures)
        return this.state.pictures.map((i, index) => {
            return <GalleryImage key={index} pictureUrl={i.pictureUrl} 
                        grayscale={i.grayscale} 
                        opacity={i.opacity}
                        saturate={i.saturate}
                        sepia={i.sepia}
                        hueRotate={i.hueRotate}
                        brightness={i.brightness}
                        contrast={i.contrast}
                        invert={i.invert}
                        />
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