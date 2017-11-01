import React, { Component } from 'react';
import cN from 'classnames';
import Trigger from '../Trigger';
import data from '../../data.json';
import './Machine.css';

import Slot from "../Slot/Slot";

class Machine extends Component {
  constructor() {
    super();

    this.state = {
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
    this.props.onChange(true);
    const amount = 100;
    const delay = 50;
    setTimeout(() => {
      clearTimeout(this.randomTimeout);
      this.props.onChange(false);
      this.setState({ going: false });
    }, amount * delay);
  };

  render() {
    const { going } = this.state;
    return (
      <section className={cN("Machine", { "Machine--going": going })}>
        <div className="Machine__inner">
          {data.abc.map((item, index) => {
            return (
              <Slot
                key={item.title}
                {...item}
                going={going}
                index={index}
                isLast={index + 1 === data.abc.length}
              />
            );
          })}
        </div>
        <Trigger active={going} onClick={this.create} />
      </section>
    )
  }
}

export default Machine;