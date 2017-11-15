import React, { Component } from 'react';
import cN from 'classnames';
import data from '../../data.json';
import logo from './logo.svg';
import './App.css';

import Machine from '../Machine';

class App extends Component {
  static shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  constructor() {
    super();
    this.state = {
      going: false,
      data: {},
    }
  }

  componentDidMount() {
    const id = this.props.match.params.generatorId;
    const itemData = (data[id]) ? data[id] : {
      title: "Not found",
      slots: [{ "title": "Found?", "items": ["Not found", "Doesn't exist", "Next time better."] }]
    };

    if (itemData.type === "combiner") {
      const slots = [];
      // first put all the items in a random order
      App.shuffleArray(itemData.items);

      let i, j, k = 0, temparray, chunk = (itemData.items.length / itemData.chunks);
      for (i = 0, j = itemData.items.length; i < j; i += chunk) {
        k += 1;
        temparray = itemData.items.slice(i, i + chunk);
        slots.push({
          title: `${itemData.chunkTitle} ${k}`,
          items: temparray
        })
      }

      itemData.slots = slots;
    }
    this.setState({ data: itemData });
  }

  handleChange = going => {
    this.setState({
      going
    })
  };

  render() {
    return (
      <div className={cN("App", { "App--going": this.state.going })} style={{backgroundColor: this.state.data.backgroundColor}}>
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
