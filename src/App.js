import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/NavigationComponent";
import Main from "./components/MainComponent";
import Login from "./components/LoginComponent";

import * as ROUTES from "./shared/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LOGIN} component={Login} />
      <Route path={ROUTES.RATING} component={Main} />
    </div>
  </Router>
);

export default App;
