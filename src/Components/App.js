import React from "react";
import { Router } from "@reach/router";

import Login from "./Auth/login";
import Home from "./Pages/home";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: "NOT_LOGGED_IN"
    };
  }

  componentDidMount() {
    if (this.state.loggedIn !== "LOGGED_IN") {
      console.log("You need to login!");
    }
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Login path="/" />
          <Home path="/home" />
        </Router>
      </div>
    );
  }
}
