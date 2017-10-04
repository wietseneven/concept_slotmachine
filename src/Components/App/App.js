import React, { Component } from 'react';
import './App.css';

import Machine from '../Machine';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CONCEPTGENERATOR 1.0</h1>
        </header>
        <Machine />
      </div>
    );
  }
}

export default App;
