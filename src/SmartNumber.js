import React, { Component } from "react";
import DumbNumber from "./DumbNumber";

class SmartNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  incrementValue = () => {
    this.setState({
      value: this.state.value + 1
    });
  };
  decrementValue = () => {
    this.setState({
      value: this.state.value - 1
    });
  };
  render() {
    return (
      <DumbNumber
        value={this.state.value}
        onDecrement={this.decrementValue}
        onIncrement={this.incrementValue}
      />
    );
  }
}
export default SmartNumber;