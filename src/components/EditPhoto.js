import React, { Component } from 'react';
import '../assets/cat.jpg';
import filters from '../filterData';
import test from '../filterDataTEST';

import './EditPhoto.css';



class EditPicture extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            activeFilter: 'grayscale',
            filterValue: .5
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e) {
        document.getElementsByClassName("sliderInput")[0].min =  filters[e.target.className].min
        document.getElementsByClassName("sliderInput")[0].max =  filters[e.target.className].max
        document.getElementsByClassName("sliderInput")[0].value =  filters[e.target.className].defaultValue
        document.getElementsByClassName("image")[0].setAttribute(`style`, `filter:${e.target.className}(${filters[e.target.className].defaultValue + filters[e.target.className].unit})`);

        this.setState({
            activeFilter: e.target.className,
            filterValue: filters[e.target.className].defaultValue
        })
        console.log("input value: " + document.getElementsByClassName("sliderInput")[0].value)
        console.log("default value: " + filters[e.target.className].defaultValue)
        
    }



    handleChange() {
        this.setState({
            filterValue: document.getElementsByClassName("sliderInput")[0].value + filters[this.state.activeFilter].unit
        })
        document.getElementsByClassName("image")[0].setAttribute(`style`, `filter:${this.state.activeFilter}(${this.state.filterValue})`);        
        console.log(this.state.filterValue);
    }

    render() {
        let tempImage = '../assets/cat.jpg'

        return (
            <div className="editPicture">
          
                <img className="image" src={require('../assets/cat.jpg')} width="400px" alt="" />
                
                <div className="code">
                    <div className="text">filter: {this.state.activeFilter}({this.state.filterValue}) </div>
                </div>

                <div className="slidecontainer">
                    <input onChange={this.handleChange} 
                        className="sliderInput" 
                        type="range" 
                        min={filters[this.state.activeFilter].min} 
                        max={filters[this.state.activeFilter].max} 
                        defaultValue={filters[this.state.activeFilter].detaultValue} 
                        step={filters[this.state.activeFilter].step }/>
                    <button className="save">save</button>
                </div>

                {/* buttons */}
                <div className="filters">
                    <button className="grayscale" onClick={this.handleClick}>grayscale</button>
                    <button className="saturate" onClick={this.handleClick}>saturate</button>
                    <button className="blur" onClick={this.handleClick}>blur</button>
                    <button onClick={this.handleClick}>sepia</button>
                    <button onClick={this.handleClick}>hue-rotate</button>
                    <button onClick={this.handleClick}>brightness</button>
                    <button onClick={this.handleClick}>contrast</button>
                    <button onClick={this.handleClick}>invert</button>
                    <button onClick={this.handleClick}>opacity</button>
                </div>
            </div>
        );
    }
}

export default EditPicture;