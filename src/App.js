import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import { Container } from "./components/styles/main.styled";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container>
          <Counters />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
