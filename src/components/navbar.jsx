import React, { Component } from "react";
import { Badge } from "./styles/badge.styled";
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
          <NavBrand href="#">
            Navbar <Badge>{this.props.totalCountersGreaterThanOne}</Badge>
          </NavBrand>
        </ContainerFluid>
      </NavBar>
    );
  }
}

export default Navbar;
