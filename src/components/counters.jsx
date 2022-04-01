import React, { Component } from "react";
import Counter from "./counter";
import GlobalStyles from "./styles/Global";
import { BtnSmall } from "../components/styles/button.styled";
class Counters extends Component {
  render() {
    console.log("App - Counters Rendered");
    const { onIncrement, onDelete, onReset, counters } = this.props;
    return (
      <React.Fragment>
        <GlobalStyles />
        <BtnSmall onClick={onReset}>Reset</BtnSmall>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            np
            onDelete={onDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
