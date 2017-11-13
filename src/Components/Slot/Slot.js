import React, { Component } from 'react';
import cN from 'classnames';
import music from '../../sounds/slot-music.mp3';
import winSound from '../../sounds/slot-win.mp3';
import bellSound from '../../sounds/slot-bell.mp3';

import cow from '../../sounds/cow.mp3';
import lion from '../../sounds/lion.mp3';
import rooster from '../../sounds/rooster.mp3';

import './Slot.css';

class Slot extends Component {
  static getRandomWithManyExclusions(originalArray, arrayOfIndexesToExclude) {
    let rand = null;
    while (rand === null || arrayOfIndexesToExclude.includes(rand)) {
      rand = Math.round(Math.random() * (originalArray.length - 1));
    }
    arrayOfIndexesToExclude.push(rand);
    return originalArray[rand];
  }

  constructor(props) {
    super(props);

    this.state = {
      current: '',
      going: false,
    };

    this.music = new Audio(music);
    this.bellSound = new Audio(bellSound);
    this.winSound = new Audio(winSound);

    this.winSounds = [new Audio(winSound), new Audio(cow), new Audio(lion), new Audio(rooster)];

    this.gone = [];
  }

  componentWillReceiveProps(newProps) {
    if (this.props.going !== newProps.going && newProps.going) {
      this.go();
    }
  }

  go() {
    const { index } = this.props;
    const amount = 100;
    const delay = 50;
    this.interval = setInterval(this.generate, delay);

    this.setState({ going: true });

    this.music.currentTime = 0;
    if (!index) this.music.play();

    setTimeout(this.setFinal, (amount * delay) + (index * 250));
  }

  generate = () => {
    const { items } = this.props;
    // console.log(this.props);
    const current = items[Math.floor(Math.random() * items.length)];
    this.setState({ current });
  };

  playSound = () => {
    const { isLast } = this.props;
    if (isLast) {
      const sound = this.winSounds[Math.floor(Math.random() * this.winSounds.length)];
      sound.play();
    } else {
      this.bellSound.play()
    }
  };

  setFinal = () => {
    const { items, index } = this.props;
    clearInterval(this.interval);
    if (!index) this.music.pause();
    this.setState({ going: false });
    this.playSound();
    if (this.gone.length === items.length) this.gone = [];
    this.setState({
      current: Slot.getRandomWithManyExclusions(items, this.gone),
    });
  };

  render() {
    const { title } = this.props;
    const { current, going } = this.state;
    return (
      <article className="Slot">
        <h2 className="Slot__title">{title}</h2>
        <div className="Slot__wrap">
          <div className={cN("Slot__inner", { "Slot__inner--going": going })}>{current}</div>
        </div>
      </article>
    )
  }
}

export default Slot;