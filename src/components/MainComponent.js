import React, { Component } from "react";
import RatingConsole from "./RatingConsoleComponent";
import Navbar from "./NavbarComponent";
import { Container, Typography } from "@material-ui/core";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import RestorePageIcon from "@material-ui/icons/RestorePage";

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container maxWidth="lg">
          <DeviceOrientation lockOrientation={"landscape"}>
            <Orientation orientation="landscape" alwaysRender={false}>
              <RatingConsole />
            </Orientation>
            <Orientation orientation="portrait" alwaysRender={false}>
              <Container className="portrait-container">
                <RestorePageIcon fontSize="large" />
                <Typography className="portrait-text" variant="h4">
                  Please rotate your device.
                </Typography>
              </Container>
            </Orientation>
          </DeviceOrientation>
        </Container>
      </div>
    );
  }
}

export default Main;
