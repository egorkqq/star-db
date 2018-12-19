import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./../Header";
import RandomPlanet from "./../RandomPlanet";
import PeoplePage from "./../PeoplePage";
import LoginPage from "../SecretPages/login.js";
import SecretPage from "../SecretPages/secret.js";
import "./styles.sass";

import SwapiService from "../../services/swapi";

class App extends Component {
  state = {
    isLoggedIn: false
  };
  swapiService = new SwapiService();

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <RandomPlanet />
          <Switch>
            <Route
              path="/"
              exact
              render={() => <h2 className="text-center">Welcome to StarDB</h2>}
            />

            <Route
              path="/planets"
              render={() => {
                return (
                  <PeoplePage
                    planets
                    getListType={this.swapiService.getAllPlanets}
                    getDetailsType={this.swapiService.getPlanet}
                  />
                );
              }}
            />
            <Route
              path="/people"
              render={() => {
                return (
                  <PeoplePage
                    people
                    getListType={this.swapiService.getAllPeople}
                    getDetailsType={this.swapiService.getPerson}
                  />
                );
              }}
            />
            <Route
              path="/starships"
              render={() => {
                return (
                  <PeoplePage
                    starships
                    getListType={this.swapiService.getAllStarships}
                    getDetailsType={this.swapiService.getStarship}
                  />
                );
              }}
            />
            <Route
              path="/login"
              render={() => {
                return (
                  <LoginPage
                    isLoggedIn={this.state.isLoggedIn}
                    onLogin={this.onLogin}
                  />
                );
              }}
            />
            <Route
              path="/secret"
              render={() => {
                return <SecretPage isLoggedIn={this.state.isLoggedIn} />;
              }}
            />
            <Route
              render={() => {
                return <h2> Page not found</h2>;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
