import React, { Component } from 'react';
import cN from 'classnames';
import Trigger from '../Trigger';
import data from '../../data.json';
import './Machine.css';

class Machine extends Component {
  constructor() {
    super();

    this.state = {
      subject: '',
      group: '',
      moment: '',
      mechanic: '',
      going: false,
    };
  }

  componentDidMount() {
    window.addEventListener("keypress", this.handleKeyPress, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keypress", this.handleKeyPress, false);
  }

  handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      this.create();
    }
  };

  create = () => {
    if (this.state.going) return;
    this.setState({ going: true });
    const amount = 100;
    const delay = 25;
    for (let i = 0; i < amount; i += 1) {
      setTimeout(this.generate, delay * i);
    }
    setTimeout(() => {
      this.setState({ going: false });
    }, amount * delay);
  };

  generate = () => {
    const { subjects, groups, moments } = data;
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const group = groups[Math.floor(Math.random() * groups.length)];
    const moment = moments[Math.floor(Math.random() * moments.length)];
    const mechanic = moments[Math.floor(Math.random() * moments.length)];
    this.setState({ subject, group, moment, mechanic });
  };

  reset = () => {
    this.setState({
      subject: '',
      group: '',
      moment: '',
      mechanic: '',
      going: false,
    })
  };

  render() {
    const { subject, group, moment, mechanic, going } = this.state;
    return (
      <section className={cN("Machine", { "Machine--going": going })}>
        <div className="Machine__inner">
          <article className="Machine__group">
            <h2>For who</h2>
            <div className="Machine__slot">
              <div className="Machine__slot__inner">{group}</div>
            </div>
          </article>
          <article className="Machine__group">
            <h2>What moment</h2>
            <div className="Machine__slot">
              <div className="Machine__slot__inner">{moment}</div>
            </div>
          </article>
          <article className="Machine__group">
            <h2>About what</h2>
            <div className="Machine__slot">
              <div className="Machine__slot__inner">{subject}</div>
            </div>
          </article>
          <article className="Machine__group">
            <h2>With this mechanic</h2>
            <div className="Machine__slot">
              <div className="Machine__slot__inner">{mechanic}</div>
            </div>
          </article>
          <button className="Machine__button" onClick={this.create}>GO!</button>
          <button className="Machine__button" onClick={this.reset}>Reset</button>
        </div>
        <Trigger active={going} onClick={this.create} />
      </section>
    )
  }
}

export default Machine;