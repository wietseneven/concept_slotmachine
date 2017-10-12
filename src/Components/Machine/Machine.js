import React, { Component } from 'react';
import cN from 'classnames';
import Trigger from '../Trigger';
import data from '../../data.json';
import './Machine.css';

import music from '../../sounds/slot-music.mp3';
import winSound from '../../sounds/slot-win.mp3';
import bellSound from '../../sounds/slot-bell.mp3';

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

    this.goneSubjects = [];
    this.goneGroups = [];
    this.goneMoments = [];
    this.goneMechanics = [];
  }

  componentDidMount() {
    window.addEventListener("keypress", this.handleKeyPress, false);

    this.music = new Audio(music);
    this.winSound = new Audio(winSound);
    this.bellSound1 = new Audio(bellSound);
    this.bellSound2 = new Audio(bellSound);
    this.bellSound3 = new Audio(bellSound);
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
    this.music.currentTime = 0;
    this.music.play();
    const amount = 100;
    const delay = 50;
    for (let i = 0; i < amount; i += 1) {
      this.randomTimeout = setTimeout(this.generate, delay * i);
    }
    setTimeout(() => {
      clearTimeout(this.randomTimeout);
      this.setFinal();
      this.props.onChange(false);
      this.setState({ going: false });
      this.music.pause();
      this.playWinSounds();
    }, amount * delay);
  };

  playWinSounds() {
    this.bellSound1.play();
    setTimeout(() => {
      this.bellSound2.play();
    }, 250);
    setTimeout(() => {
      this.bellSound3.play();
    }, 500);
    setTimeout(() => {
      this.winSound.play();
    }, 750);
  }

  generate = () => {
    const { subjects, groups, moments, mechanics } = data;
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const group = groups[Math.floor(Math.random() * groups.length)];
    const moment = moments[Math.floor(Math.random() * moments.length)];
    const mechanic = mechanics[Math.floor(Math.random() * mechanics.length)];
    this.setState({ subject, group, moment, mechanic });
  };

  setFinal() {
    const { subjects, groups, moments, mechanics } = data;
    if (this.goneSubjects.length === subjects.length) this.goneSubjects = [];
    if (this.goneGroups.length === groups.length) this.goneGroups = [];
    if (this.goneMoments.length === moments.length) this.goneMoments = [];
    if (this.goneMechanics.length === mechanics.length) this.goneMechanics = [];

    this.setState({
      subject: this.getRandomWithManyExclusions(subjects, this.goneSubjects),
      group: this.getRandomWithManyExclusions(groups, this.goneGroups),
      moment: this.getRandomWithManyExclusions(moments, this.goneMoments),
      mechanic: this.getRandomWithManyExclusions(mechanics, this.goneMechanics)
    });
  }

  getRandomWithManyExclusions(originalArray, arrayOfIndexesToExclude) {
    let rand = null;
    while (rand === null || arrayOfIndexesToExclude.includes(rand)) {
      rand = Math.round(Math.random() * (originalArray.length - 1));
    }
    arrayOfIndexesToExclude.push(rand);
    return originalArray[rand];
  }

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
            <h2>Which moment</h2>
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
          {/*<button className="Machine__button" onClick={this.create}>GO!</button>*/}
          {/*<button className="Machine__button" onClick={this.reset}>Reset</button>*/}
        </div>
        <Trigger active={going} onClick={this.create} />
      </section>
    )
  }
}

export default Machine;