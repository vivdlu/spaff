import React, { Component } from "react";
import RatingConsole from "./RatingConsoleComponent";
import RotateMessage from "./RotateMessageComponent";
import { Container } from "@material-ui/core";
import DeviceOrientation, { Orientation } from "react-screen-orientation";

class Main extends Component {
  render() {
    return (
      <Container maxWidth="lg">
        <DeviceOrientation lockOrientation={"landscape"}>
          <Orientation orientation="portrait" alwaysRender={false}>
            <RotateMessage />
          </Orientation>
          <Orientation orientation="landscape" alwaysRender={true}>
            <RatingConsole />
          </Orientation>
        </DeviceOrientation>
      </Container>
    );
  }
}

export default Main;
