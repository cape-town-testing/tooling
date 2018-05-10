import React, { Component } from "react";
import classNames from "classnames";
import { timer } from "./config"
import "./App.css";

class App extends Component {
  state = {
    color: "green",
    showCounter: false,
    counter: 10
  };

  componentDidMount() {
    this.timeLimit = window.prompt("How long should the talk be (minutes)?");
    this.run();
  }

  getConfirmation() {
    return window.confirm("Start lightning talk?");
  }

  run() {
    this.getConfirmation();
      const timeLimitMilliseconds = this.timeLimit * 60000;
      this.changeColor("green");
      setTimeout(
        this.changeColor.bind(this, "yellow"),
        timeLimitMilliseconds * 0.5
      );
      setTimeout(
        this.changeColor.bind(this, "orange"),
        timeLimitMilliseconds * 0.65
      );
      setTimeout(
        this.changeColor.bind(this, "orangered"),
        timeLimitMilliseconds * 0.75
      );
      setTimeout(
        this.changeColor.bind(this, "red"),
        timeLimitMilliseconds - 10000
      );
      setTimeout(this.toggleCounter.bind(this), timeLimitMilliseconds - 10000);
      setTimeout(this.changeCounter.bind(this), timeLimitMilliseconds - 9000);
      setTimeout(this.changeCounter.bind(this), timeLimitMilliseconds - 8000);
      setTimeout(this.changeCounter.bind(this), timeLimitMilliseconds - 7000);
      setTimeout(this.changeCounter.bind(this), timeLimitMilliseconds - 6000);
      setTimeout(this.changeCounter.bind(this), timeLimitMilliseconds - 5000);
      setTimeout(this.changeCounter.bind(this), timeLimitMilliseconds - 4000);
      setTimeout(this.changeCounter.bind(this), timeLimitMilliseconds - 3000);
      setTimeout(this.changeCounter.bind(this), timeLimitMilliseconds - 2000);
      setTimeout(this.changeCounter.bind(this), timeLimitMilliseconds - 1000);
      setTimeout(this.changeCounter.bind(this), timeLimitMilliseconds);
      setTimeout(this.resetCounter.bind(this), timeLimitMilliseconds + 1000);
      setTimeout(this.run.bind(this), timeLimitMilliseconds + 1000);
  }

  changeColor(color) {
    this.setState({
      color
    });
  }

  resetCounter() {
    this.setState({
      showCounter: false,
      counter: 10
    });
  }

  toggleCounter() {
    this.setState({
      showCounter: !this.state.showCounter
    });
  }

  changeCounter() {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }

  render() {
    const appClass = classNames({
      App: true,
      white: this.state.showCounter && this.state.counter === 0,
      [this.state.color]: true
    });
    console.log(timer);
    return (
      <div className={appClass}>
      {!this.state.showCounter && <h1>Timer is counting down, wait for the color change</h1>}
      { this.state.counter > 10 && this.state.counter < 15 && <h1>Last 10 secnds coming up</h1>}
        {this.state.showCounter &&
          this.state.counter > 0 && <h1>{this.state.counter}</h1>}
        {this.state.showCounter &&
          this.state.counter === 0 && <h1 className="white">Questions?</h1>}
      </div>
    );
  }
}

export default App;
