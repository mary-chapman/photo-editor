import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from './components/NavBar'
import ChoosePhoto from './components/ChoosePhoto'
import EditPhoto from './components/EditPhoto'
import Gallery from './components/Gallery'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Navbar} />
          <Route exact path="/" component={ChoosePhoto} />
          <Route exact path="/editPhoto" component={EditPhoto} />
          <Route exact path="/editPhoto/:id" component={EditPhoto} />
          <Route exact path="/gallery" component={Gallery} />
        </div>
      </Router>
    );
  }
}

export default App;
