import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import routeCodes from "../constants/routes";
import Navbar from "../components/navbar";
import Lifestyle from "./lifestyle";
import Fashion from "./fashion";
import Sport from "./sport";
import Favorites from "./favorites";
import Home from "./home";

class Routes extends Component {
  render() {
    const history = createBrowserHistory();
    return (
      <Router history={history}>
        <Navbar />
        <Switch location={history.location}>
          <Route exact path={routeCodes.HOME} component={Home} />
          <Route exact path={routeCodes.LIFESTYLE} component={Lifestyle} />
          <Route exact path={routeCodes.SPORT} component={Sport} />
          <Route exact path={routeCodes.FASHION} component={Fashion} />
          <Route exact path={routeCodes.FAVORITES} component={Favorites} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
