import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./../Header";
import RandomPlanet from "./../RandomPlanet";
import PeoplePage from "./../PeoplePage";
import "./styles.sass";

import SwapiService from "../../services/swapi";

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <RandomPlanet />
          <Route
            path="/"
            exact
            render={() => <h2 className="text-center">Welcome to StarDB</h2>}
          />
          <Route
            path="/planets"
            exact
            render={() => <h2 className="text-center">Planets</h2>}
          />
          <Route
            path="/people"
            exact
            render={() => <h2 className="text-center">People</h2>}
          />
          <Route
            path="/starships"
            exact
            render={() => <h2 className="text-center">Starships</h2>}
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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
