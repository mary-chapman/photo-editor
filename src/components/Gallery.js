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
        var style = {
            border: '2px solid green'
        }
        return this.state.pictures.map((i, ind) => {
            console.log(i.pictureUrl)
            //return <h1>hello {i.pictureUrl}</h1>
            return <img key={ind} src={i.pictureUrl} width="400px" style={style} />
        })
    }

    render() {
        return (
            <div>
                <h1>test</h1>
                { (this.state.pictures.length < 0 ? null : this.renderPictures()) }
            </div>
        )

    }
}

export default Gallery;