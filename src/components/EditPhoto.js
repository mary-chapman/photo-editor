import React, { Component } from 'react';
import '../assets/cat.jpg';
import filters from '../filterData';
import test from '../filterDataTEST';

import './EditPhoto.css';




class EditPicture extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            savedFilters: [],
            currentFilterName: '',
            currentFilterValue: '',
            currentFilterUnit: '',
            currentFilterMin: '',
            currentFilterMax: '',
            currentFilterStep: '',
            currentFilterValue: '',
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleSave() {

        if ( document.getElementsByClassName('hueRotate')[0].disabled == false || document.getElementsByClassName(this.state.currentFilterName)[0].disabled == false) {
            var filterToSave = `${this.state.currentFilterName}(${document.getElementById("sliderInput").value}${this.state.currentFilterUnit})`
            this.setState({ savedFilters: [...this.state.savedFilters, filterToSave]})
            document.getElementById("text").innerHTML = 'filter: ' + this.state.savedFilters.join(' ') + ' ' + filterToSave;
    
        }
        //change the color of the handlesave button

        //disable the button clicked and change css
        if (this.state.currentFilterName == 'hue-rotate') {
            document.getElementsByClassName('hueRotate')[0].style = 'border-color:#878787; color: gray; background-color: #bababa ;cursor: default';
            document.getElementsByClassName("hueRotate")[0].disabled = true;
        } else {
            document.getElementsByClassName(this.state.currentFilterName)[0].disabled = true;
            document.getElementsByClassName(this.state.currentFilterName)[0].style = 'border-color:#878787; color: gray; background-color: #bababa ;cursor: default';
        }

     }

    async handleClick(e) {
        // grab the filter name of the button clicked from filter data
        const filterClicked = filters[e.target.className];

        // set the state based on whats grabbed from filter data
        await this.setState({
            currentFilterName: filterClicked.name,
            currentFilterValue: filterClicked.defaultValue,
            currentFilterUnit: filterClicked.unit,
            currentFilterMin: filterClicked.min,
            currentFilterMax: filterClicked.max,
            currentFilterStep: filterClicked.step
        })

        // chanes the filter of the actual image 
        if (this.state.savedFilters.length > 0) {
            document.getElementById("image").style.filter = `${this.state.savedFilters.join( " ")} ${filterClicked.name}(${filterClicked.defaultValue}${filterClicked.unit})`;
        } else {
            document.getElementById("image").style.filter = `${filterClicked.name}(${filterClicked.defaultValue}${filterClicked.unit})`;
        }
        
        // set the min, max, step of the sliders
        document.getElementById("sliderInput").min = filterClicked.min;
        document.getElementById("sliderInput").max = filterClicked.max;
        document.getElementById("sliderInput").step = filterClicked.step;
        document.getElementById("sliderInput").value = filterClicked.defaultValue;

        // set the text of the code display
        document.getElementById("text").innerHTML = `filter: ${this.state.savedFilters.join(" ")} ${filterClicked.name}(${filterClicked.defaultValue}${filterClicked.unit})`

        // change the bg color of the button 
        document.querySelectorAll("button").forEach(i => {
            console.log(i.style.backgroundColor)
            if (i.style.color != 'gray') {
                i.style = 'background-color: white'
            }
        })
        if (this.state.currentFilterName == 'hue-rotate') {
            document.getElementsByClassName('hueRotate')[0].style = await 'background-color:#fff6e0';
        } else {
            document.getElementsByClassName(this.state.currentFilterName)[0].style = await 'background-color:#fff6e0';
        }
         
    }

    async handleChange() {

        // change the picture to the value of the slider
        document.getElementById("image").style.filter = `${this.state.savedFilters.join(" ")} ${this.state.currentFilterName}(${document.getElementById("sliderInput").value}${this.state.currentFilterUnit})`;

        // change the state 
        await this.setState({
            currentFilterValue: document.getElementById("sliderInput").value,
        })

        document.getElementById("text").innerHTML = await `filter: ${this.state.savedFilters.join(" ")} ${this.state.currentFilterName}(${this.state.currentFilterValue}${this.state.currentFilterUnit})`
    }


    render() {
        let tempImage = 'https://images.unsplash.com/photo-1458530970867-aaa3700e966d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5f8426c7be0eb1b30a6329adeddb6207&auto=format&fit=crop&w=1050&q=80'

        return (
            <div className="editPicture">

                {/* <img id="image" src={require('../assets/cat.jpg')} width="400px" alt="" /> */}
                <img id="image" src={tempImage} width="400px" alt="" />

                <div className="code">
                    <div id="text"></div>
                </div>

                <div className="slidecontainer">
                <input type="range"  id="sliderInput" onChange = {this.handleChange} />
                <button className="save" onClick={this.handleSave}>save</button>
                </div>


                <div className="filters">
                    <button className="grayscale" onClick={this.handleClick}>grayscale</button>
                    <button className="saturate" onClick={this.handleClick}>saturate</button>
                    <button className="blur" onClick={this.handleClick}>blur</button>
                    <button className="sepia" onClick={this.handleClick}>sepia</button>
                    <button className="hueRotate" onClick={this.handleClick}>hue-rotate</button>
                    <button className="brightness" onClick={this.handleClick}>brightness</button>
                    <button className="contrast" onClick={this.handleClick}>contrast</button>
                    <button className="invert" onClick={this.handleClick}>invert</button>
                    <button className="opacity" onClick={this.handleClick}>opacity</button>
                </div>
            </div>
        );
    }
}

export default EditPicture;