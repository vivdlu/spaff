import React from "react";
import RatingConsole from "./RatingConsoleComponent";
import RotateMessage from "./RotateMessageComponent";
import { Container } from "@material-ui/core";
import DeviceOrientation, { Orientation } from "react-screen-orientation";

function Main() {
  return (
    <Container maxWidth="lg">
      <DeviceOrientation>
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

export default Main;
