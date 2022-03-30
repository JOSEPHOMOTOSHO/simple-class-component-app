import React, { Component } from "react";
import Counter from "./counter";
import GlobalStyles from "./styles/Global";
import { BtnSmall } from "../components/styles/button.styled";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 16 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    let counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <BtnSmall onClick={this.handleReset}>Reset</BtnSmall>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={() => this.handleIncrement(counter)}
            onDelete={this.handleDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
