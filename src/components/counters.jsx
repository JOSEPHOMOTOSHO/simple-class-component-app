import React, { Component } from "react";
import Counter from "./counter";
import GlobalStyles from "./styles/Global";
import { BtnSmall } from "../components/styles/button.styled";
class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <BtnSmall onClick={this.props.onReset}>Reset</BtnSmall>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
