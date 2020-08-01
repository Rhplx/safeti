import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Buy from "./pages/Buy.jsx";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/buy" component={Buy} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
