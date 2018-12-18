import React, { Component } from "react";
import SwapiService from "./../../services/swapi";
import Spinner from "./../Loader";
import ErrorIndicator from "./../ErrorIndicator";
import "./styles.sass";
class RandomPlanet extends Component {
  swapiService = new SwapiService();
  state = {
    planet: {},
    loading: true,
    error: false
  };
  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };
  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };
  updatePlanet = () => {
    const id = Math.floor(Math.random() * 18 + 1);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    return (
      <div className="jumbotron rounded d-flex justify-center mt-4 p-0">
        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorIndicator />
        ) : (
          <PlanetView planet={planet} />
        )}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <div className="random-planet d-flex">
      <div className="planet-image ">
        <img
          alt="Изображение отсутствует"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          width="100%"
        />
      </div>
      <div className="planet-info col-xl-8">
        <h3>{name}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span>Population:</span> <span> {population}</span>
          </li>
          <li className="list-group-item">
            <span>Rotation Period: </span>
            <span children={rotationPeriod} />
          </li>
          <li className="list-group-item">
            <span children="Diameter: " />
            <span children={diameter} />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default RandomPlanet;
