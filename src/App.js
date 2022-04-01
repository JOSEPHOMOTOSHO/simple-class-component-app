import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import { Container } from "./components/styles/main.styled";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 16 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

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
    console.log("App -Rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCountersGreaterThanOne={
            this.state.counters.filter((c) => c.value > 0).length
          }
        />
        <Container>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
