import React, { Component } from 'react';
import cN from 'classnames';
import './Create.css';

class Create extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    }
  }

  handleChange = going => {
    this.setState({
      going
    })
  };

  render() {
    return (
      <div className={cN("App", "Create")}>
        <header className="App-header">
          <h1 className="App-title">Generator creation studio</h1>
        </header>
        <div className="Create__field">
          <label htmlFor="#field__title">Generator title</label>
          <input type="text" id="#field__title" name="title" />
        </div>
      </div>
    );
  }
}

export default Create;
