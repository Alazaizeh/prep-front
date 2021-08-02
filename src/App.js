import "./App.css";
import DrinksList from "./components/DrinksList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import LoginButton from "./components/LoginButton";
import { withAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./components/LogoutButton";

import React, { Component } from "react";
import { FavList } from "./components/FavList";

export class App extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/fav">Fav</Link>
              </li>
              <li>
                {this.props.auth0.isAuthenticated ? (
                  <Link to="/profile">Profile</Link>
                ) : null}
              </li>
              <li>
                {this.props.auth0.isAuthenticated ? (
                  <LogoutButton />
                ) : (
                  <LoginButton />
                )}
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/fav">
              <FavList />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <DrinksList />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withAuth0(App);
