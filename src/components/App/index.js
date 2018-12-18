import React, { Component } from "react";
import Header from "./../Header";
import RandomPlanet from "./../RandomPlanet";
import PeoplePage from "./../PeoplePage";
import "./styles.sass";

import SwapiService from "../../services/swapi";

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage getDataType={this.swapiService.getAllPeople} />
        <PeoplePage getDataType={this.swapiService.getAllPlanets} />
        <PeoplePage getDataType={this.swapiService.getAllStarships} />
      </div>
    );
  }
}

export default App;
