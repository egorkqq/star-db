import React, { Component, Fragment } from "react";
import Header from "./../Header";
import RandomPlanet from "./../RandomPlanet";
import PersonDetails from "./../PersonDetails";
import ItemList from "./../ItemList";
import "./styles.sass";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <div className="row">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
