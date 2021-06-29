import React, { Component } from "react";
import { render } from "react-dom";
import { Button } from "react-bootstrap";
import CForm from "./CForm";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <CForm/>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);