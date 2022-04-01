import React, { Component } from "react";
import { Badge } from "./styles/badge.styled";
import { BtnSmall } from "./styles/button.styled";
import { FlexWrap } from "./styles/flexwrap.styled";
import { BtnDanger } from "./styles/button.styled";
// import GlobalStyle from "./styles/Global";

class Counter extends Component {
  render() {
    console.log("Counter - Rendered");
    const { onIncrement, onDelete } = this.props;
    return (
      <React.Fragment>
        <FlexWrap>
          <Badge warn={this.isZero()}>{this.formatOnChange()}</Badge>
          <BtnSmall onClick={() => onIncrement(this.props.counter)}>
            Increment
          </BtnSmall>
          <BtnDanger onClick={() => onDelete(this.props.counter.id)}>
            Delete
          </BtnDanger>
        </FlexWrap>
      </React.Fragment>
    );
  }
  isZero() {
    return this.props.counter.value === 0 ? true : false;
  }

  formatOnChange() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
