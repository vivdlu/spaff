import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/NavigationComponent";
import Main from "./components/MainComponent";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Main />
    </Fragment>
  );
}

export default App;
