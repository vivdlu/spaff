import React, { Component } from "react";
import RatingConsole from "./RatingConsoleComponent";
import RotateMessage from "./RotateMessageComponent";
import { Container } from "@material-ui/core";

class Main extends Component {
  render() {
    return (
      <Container maxWidth="lg">
        <RatingConsole />
      </Container>
    );
  }
}

export default Main;
