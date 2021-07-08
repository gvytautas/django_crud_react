import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import { Container } from "react-bootstrap";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <HomePage />
      </Container>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
