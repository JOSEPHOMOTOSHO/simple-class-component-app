import React, { Component } from "react";
import { Badge } from "./styles/badge.styled";
import {
  NavBar,
  ContainerFluid,
  NavBrand,
} from "../components/styles/nav.styled";

//stateless functional component. preferred usage when a component is stateless. props are passed
//as arguments. you could destructure or use props keyword straight. point is you dont need "this"

const Navbar = ({ totalCountersGreaterThanOne }) => {
  console.log("App - Component Rendered ");
  return (
    <NavBar>
      <ContainerFluid>
        <NavBrand href="#">
          Navbar <Badge>{totalCountersGreaterThanOne}</Badge>
        </NavBrand>
      </ContainerFluid>
    </NavBar>
  );
};

export default Navbar;
