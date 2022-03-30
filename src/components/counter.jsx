import React, { Component } from "react";
import { Badge } from "./styles/badge.styled";
import { BtnSmall } from "./styles/button.styled";
import { FlexWrap } from "./styles/flexwrap.styled";
import { BtnDanger } from "./styles/button.styled";
// import GlobalStyle from "./styles/Global";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <h1>Counter #{this.props.counter.id}</h1>
        <FlexWrap>
          <Badge warn={this.isZero()}>{this.formatOnChange()}</Badge>
          <BtnSmall onClick={() => this.handleIncrement("Omotosho Product")}>
            Increment
          </BtnSmall>
          <BtnDanger onClick={() => this.props.onDelete(this.props.counter.id)}>
            Delete
          </BtnDanger>
        </FlexWrap>
      </React.Fragment>
    );
  }
  isZero() {
    return this.state.value === 0 ? true : false;
  }

  formatOnChange() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
