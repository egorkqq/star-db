import React, { Component } from "react";
import SwapiService from "./../../services/swapi";
import Spinner from "./../Loader";
import "./styles.sass";
class RandomPlanet extends Component {
  swapiService = new SwapiService();
  state = {
    planet: {},
    isLoading: true
  };
  constructor() {
    super();
    this.updatePlanet();
  }
  onPlanetLoaded = planet => {
    this.setState({ planet });
  };
  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  }
  render() {
    const {
      planet: { id, name, population, rotationPeriod, diameter }
    } = this.state;
    return (
      <div class="jumbotron rounded mt-4 p-0">
        <div class="random-planet">
          <div className="planet-image ">
            <img
              alt="Planet"
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              width="100%"
            />
          </div>
          <div className="planet-info">
            <h3>{name}</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <span>Population:</span> <span> {population}</span>
              </li>
              <li class="list-group-item">
                <span>Rotation Period: </span>
                <span children={rotationPeriod} />
              </li>
              <li class="list-group-item">
                <span children="Diameter: " />
                <span children={diameter} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
