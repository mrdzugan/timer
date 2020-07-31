import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = { time: new Date(0, 0, 0, 0, 0, 0, 0, 0, 0) };
    this.intervalId = null;
  }

  tick = () => {
    this.setState(state => {
      const { time } = state;
      const newDate = new Date(time.getTime());
      newDate.setSeconds(newDate.getSeconds() + 1);
      return {
        time: newDate,
      };
    });
  };

  start = () => {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);
  };

  stop = () => {
    if (!this.intervalId) {
      return;
    }
    clearInterval(this.intervalId);
    this.intervalId = null;
  };

  reset = () => {
    const newDate = new Date(0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.setState({ time: newDate });
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  twoDigit(v) {
    return v > 9 ? v : `0${v}`;
  }

  render() {
    const { time } = this.state;
    const hours = this.twoDigit(time.getHours());
    const minutes = this.twoDigit(time.getMinutes());
    const seconds = this.twoDigit(time.getSeconds());
    return (
      <div>
        {`${hours}:${minutes}:${seconds}`}
        <button onClick={this.start}>START</button>
        <button onClick={this.stop}>STOP</button>
        <button onClick={this.reset}>RESET</button>
      </div>
    );
  }
}

export default Timer;
