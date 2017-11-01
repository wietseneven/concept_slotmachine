import React, { Component } from 'react';
import cN from 'classnames';

import './Trigger.css';

class Trigger extends Component {
  handleClick = () => {
    const { onClick, active } = this.props;
    if (onClick && !active) onClick();
  };

  render() {
    const { active } = this.props;
    return (
      <div onClick={this.handleClick} className={cN("Trigger", { "Trigger--active": active })}>
        <div className="arm">
          <div className="knob" />
        </div>
        <div className="arm-shadow" />
        <div className="ring1">
          <div className="shadow" />
        </div>
        <div className="ring2">
          <div className="shadow" />
        </div>
      </div>
    )
  }
}

export default Trigger;