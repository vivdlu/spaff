import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/NavigationComponent";
import Main from "./components/MainComponent";

import * as ROUTES from "./shared/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={ROUTES.HOME} component={Main} />
    </div>
  </Router>
);

export default App;
