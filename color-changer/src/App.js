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
    this.run();
  }

  getConfirmation() {
    return window.confirm("Start lightning talk?");
  }

  run() {
    this.getConfirmation();
    this.changeColor("green");
    setTimeout(this.changeColor.bind(this, "yellow"), 20000);
    setTimeout(this.changeColor.bind(this, "orange"), 30000);
    setTimeout(this.changeColor.bind(this, "orangered"), 40000);
    setTimeout(this.changeColor.bind(this, "red"), 50000);
    setTimeout(this.toggleCounter.bind(this), 50000);
    setTimeout(this.changeCounter.bind(this), 51000);
    setTimeout(this.changeCounter.bind(this), 52000);
    setTimeout(this.changeCounter.bind(this), 53000);
    setTimeout(this.changeCounter.bind(this), 54000);
    setTimeout(this.changeCounter.bind(this), 55000);
    setTimeout(this.changeCounter.bind(this), 56000);
    setTimeout(this.changeCounter.bind(this), 57000);
    setTimeout(this.changeCounter.bind(this), 58000);
    setTimeout(this.changeCounter.bind(this), 59000);
    setTimeout(this.changeCounter.bind(this), 60000);
    setTimeout(this.resetCounter.bind(this), 61000);
    setTimeout(this.run.bind(this), 61000);
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
      [this.state.color]: true
    });
    console.log(timer);
    return (
      <div className={appClass}>
        {!this.state.showCounter &&
        this.state.color === 'green' && <h1>Lets start</h1>}
        {!this.state.showCounter &&
          this.state.color === 'orangered' && <h1>Last 10 secnds coming up</h1>}
        {this.state.showCounter &&
          this.state.counter > 0 && <h1>{this.state.counter}</h1>}
        {this.state.showCounter &&
          this.state.counter === 0 && <h1>Questions?</h1>}
      </div>
    );
  }
}

export default App;
