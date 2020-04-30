import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro/intro'
import 'whatwg-fetch'
import Series from '../../containers/series'

class App extends Component {
    
    render() {
      return (
          <div className="App">
              <header className="App-header">
                  <h1 className="App-title">Tv Series App</h1>
              </header>
              <Intro message="Here you find your loved web series" />
              <Series />
          </div>
      );
  }
}

export default App;
