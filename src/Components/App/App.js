import React, { Component } from 'react';
import cN from 'classnames';
import './App.css';

import Machine from '../Machine';

class App extends Component {
  constructor() {
    super();
    this.state = {
      going: false
    }
  }

  handleChange = going => {
    this.setState({
      going
    })
  };

  render() {
    return (
      <div className={cN("App", {"App--going": this.state.going})}>
        <header className="App-header">
          <h1 className="App-title">CONCEPTGENERATOR 1.0</h1>
        </header>
        <Machine onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
