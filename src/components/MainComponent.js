import React, { Fragment } from "react";
import RatingConsole from "./RatingConsoleComponent";
import RotateMessage from "./RotateMessageComponent";
import { Container } from "@material-ui/core";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import Navbar from "./NavigationComponent";

const Main = props => {
  return (
    <Fragment>
      <Navbar />
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
    </Fragment>
  );
};

export default Main;
