import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from './components/NavBar'
import ChoosePhoto from './components/ChoosePhoto'
import EditPhoto from './components/EditPhoto'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Navbar} />
          <Route exact path="/" component={ChoosePhoto} />
          <Route exact path="/editPhoto" component={EditPhoto} />
        </div>
      </Router>
    );
  }
}

export default App;
