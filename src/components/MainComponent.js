import React, { Fragment } from "react";
import RatingConsole from "./RatingConsoleComponent";
import RotateMessage from "./RotateMessageComponent";
import { Container } from "@material-ui/core";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import Navbar from "./NavigationComponent";

function Main(props) {
  return (
    <Fragment>
      <Navbar />
      <Container maxWidth="lg">
        <RatingConsole />
      </Container>
    </Fragment>
  );
}

export default Main;
