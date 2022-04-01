import React, { Component } from "react";
import {
  NavBar,
  ContainerFluid,
  NavBrand,
} from "../components/styles/nav.styled";

class Navbar extends Component {
  render() {
    return (
      <NavBar>
        <ContainerFluid>
          <NavBrand href="#">Navbar</NavBrand>
        </ContainerFluid>
      </NavBar>
    );
  }
}

export default Navbar;
