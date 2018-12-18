import React, { Component, Fragment } from "react";
import Header from "./../Header";
import RandomPlanet from "./../RandomPlanet";
import PeoplePage from "./../PeoplePage";
import "./styles.sass";
import ErrorIndicator from "../ErrorIndicator";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}

export default App;
