import React, { Component } from 'react';
import cN from 'classnames';
import data from '../../data.json';
import logo from './logo.svg';
import './App.css';

import Machine from '../Machine';

class App extends Component {
  constructor() {
    super();
    this.state = {
      going: false,
      data: {},
    }
  }

  componentDidMount() {
    const id = this.props.match.params.generatorId;
    const itemData = (data[id]) ? data[id] : { title: "Not found", slots: [{"title": "Found?", "items": ["Not found", "Doesn't exist", "Next time better."]}] };
    this.setState({ data: itemData });
  }

  handleChange = going => {
    this.setState({
      going
    })
  };

  render() {
    return (
      <div className={cN("App", { "App--going": this.state.going })}>
        <header className="App-header">
          <h1 className="App-title">{this.state.data.title}</h1>
        </header>
        <Machine data={this.state.data} onChange={this.handleChange} />
        <img src={logo} alt="logo" className="App__logo" />
      </div>
    );
  }
}

export default App;
