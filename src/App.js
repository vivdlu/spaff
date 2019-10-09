import React, { Fragment } from "react";
import "./App.css";
import Navigation from "./components/NavigationComponent";
import Main from "./components/MainComponent";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Main />
    </Fragment>
  );
}

export default App;
