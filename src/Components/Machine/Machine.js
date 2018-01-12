import React, { Component } from 'react';
import cN from 'classnames';
import Trigger from '../Trigger';
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

  getSlots() {
    const { going } = this.state;
    const { data } = this.props;
    if (!data) return;
    if (typeof data.slots === "undefined") return;
    return data.slots.map((item, index) => {
      return (
        <Slot
          key={item.title}
          {...item}
          going={going}
          index={index}
          isLast={index + 1 === data.slots.length}
        />
      );
    })
  }

  render() {
    const { going } = this.state;
    const { cols } = this.props;

    const slots = this.getSlots();
    return (
      <section className={cN("Machine", { "Machine--going": going })}>
        <div className={cN("Machine__inner", { "Machine--cols": cols })}>
          {slots}
        </div>
        <Trigger active={going} onClick={this.create} />
      </section>
    )
  }
}

export default Machine;