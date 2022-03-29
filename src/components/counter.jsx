import React, { Component } from "react";
import { Badge } from "./styles/badge.styled";
import { BtnSmall } from "./styles/button.styled";
// import GlobalStyle from "./styles/Global";

class Counter extends Component {
  state = {
    count: 1,
  };

  handleIncrement = product => {
    console.log(product)
    this.setState({count: this.state.count+1})
  }
  render() {
    return (
      <React.Fragment>
        <Badge warn={this.isZero()}>{this.formatOnChange()}</Badge>
        <BtnSmall onClick={() => this.handleIncrement("Omotosho Product")}>Increment</BtnSmall>
      </React.Fragment>
    );
  }
  isZero() {
    return this.state.count === 0 ? true : false;
  }

  formatOnChange() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
