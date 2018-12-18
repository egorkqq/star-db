import React, { Component } from "react";
import Header from "./../Header";
import RandomPlanet from "./../RandomPlanet";
import ItemPage from "./../ItemPage";
import "./styles.sass";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SwapiService from "../../services/swapi";

class App extends Component {
  swapiService = new SwapiService();
  peoplePage = () => {
    return (
      <ItemPage
        people
        getListType={this.swapiService.getAllPeople}
        getDetailsType={this.swapiService.getPerson}
      />
    );
  };
  planetPage = () => {
    return (
      <ItemPage
        planets
        getListType={this.swapiService.getAllPlanets}
        getDetailsType={this.swapiService.getPlanet}
      />
    );
  };
  starshipPage = () => {
    return (
      <ItemPage
        starships
        getListType={this.swapiService.getAllStarships}
        getDetailsType={this.swapiService.getStarship}
      />
    );
  };
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <RandomPlanet />
          <Route path="/" exact render={() => <h3>Welcome to StarDB</h3>} />
          <Route path="/people" component={this.peoplePage} />
          <Route path="/planets" component={this.planetPage} />
          <Route path="/starships" exact component={this.starshipPage} />
        </div>
      </Router>
    );
  }
}

export default App;
