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
            currentFilterValue: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleSave() {
        var filterToSave = `${this.state.currentFilterName}(${document.getElementById("sliderInput").value}${this.state.currentFilterUnit})`
        this.setState({ savedFilters: [...this.state.savedFilters, filterToSave]})
        //document.getElementById("image").style.filter += filterToSave;
        document.getElementById("text").innerHTML = 'filter: ' + this.state.savedFilters.toString() + ' ' + filterToSave;


        console.log("ON save " + (Number(this.state.currentFilterValue)))   
     }

    handleClick(e) {
        const filterClicked = filters[e.target.className];
        this.setState({
            currentFilterName: filterClicked.name,
            currentFilterValue: filterClicked.defaultValue,
            currentFilterUnit: filterClicked.unit,
            currentFilterMin: filterClicked.min,
            currentFilterMax: filterClicked.max,
            currentFilterStep: filterClicked.step
        })
        if (this.state.savedFilters.length > 0) {
            document.getElementById("image").style.filter = `${this.state.savedFilters.toString()} ${filterClicked.name}(${filterClicked.defaultValue}${filterClicked.unit})`;
        } else {
            document.getElementById("image").style.filter = `${filterClicked.name}(${filterClicked.defaultValue}${filterClicked.unit})`;
        }
        
        document.getElementById("sliderInput").min = filterClicked.min;
        document.getElementById("sliderInput").max = filterClicked.max;
        document.getElementById("sliderInput").step = filterClicked.step;
        document.getElementById("sliderInput").value = filterClicked.defaultValue;

        document.getElementById("text").innerHTML = `filter: ${this.state.savedFilters.toString()} ${filterClicked.name}(${filterClicked.defaultValue}${filterClicked.unit})`
    }

    async handleChange() {
        var sliderInput = document.getElementById("sliderInput");
        var sliderVaue = sliderInput.value;
        
        // set the min, max and step of the slider 
        sliderInput.min = filters[this.state.currentFilterName].min;
        sliderInput.max = filters[this.state.currentFilterName].max;
        sliderInput.step = filters[this.state.currentFilterName].step;

        // change the picture to the value of the slider
        document.getElementById("image").style.filter = `${this.state.savedFilters.toString()} ${this.state.currentFilterName}(${sliderVaue}${this.state.currentFilterUnit})`;

        //console.log(`${this.state.savedFilters.toString()} ${this.state.currentFilterName}(${sliderVaue}${this.state.currentFilterUnit})`);
        // change the state 
        await this.setState({
            currentFilterName: filters[this.state.currentFilterName].name,
            currentFilterValue: sliderVaue,
            currentFilterUnit: filters[this.state.currentFilterName].unit,
            currentFilterMin: filters[this.state.currentFilterName].min,
            currentFilterMax: filters[this.state.currentFilterName].max,
            currentFilterStep: filters[this.state.currentFilterName].step
        })

        document.getElementById("text").innerHTML = await `filter: ${this.state.savedFilters.toString()} ${this.state.currentFilterName}(${this.state.currentFilterValue}${this.state.currentFilterUnit})`
        console.log("ON CHANGE" + this.state.currentFilterValue)
    }


    render() {
        let tempImage = 'https://images.unsplash.com/photo-1505325681473-5e712b2eadca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42268883c25739c07af3d28d8f2030de&auto=format&fit=crop&w=1867&q=80'

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
                    <button onClick={this.handleClick}>brightness</button>
                    <button onClick={this.handleClick}>contrast</button>
                    <button className="invert" onClick={this.handleClick}>invert</button>
                    <button onClick={this.handleClick}>opacity</button>
                </div>
            </div>
        );
    }
}

export default EditPicture;