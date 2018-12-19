import React, { Component } from "react";
import ErrorButton from "../../ErrorButton";

class ItemDetailsView extends Component {
  renderPlanet(item) {
    const { id, name, population, rotationPeriod, diameter } = item;
    return (
      <div className="details">
        <div className="subject-picture">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt={name}
            width="100%"
          />
        </div>
        <div>
          <h4>{name}</h4>
          <ul className="person-data list-group list-group-flush">
            <li className="list-group-item">
              <span>Population: </span>
              <span children={population} />
            </li>
            <li className="list-group-item">
              <span>Rotation Period: </span>
              <span children={rotationPeriod} />
            </li>
            <li className="list-group-item">
              <span>Diameter: </span>
              <span children={diameter} />
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
  renderPerson(item) {
    const { id, name, gender, birthYear, eyeColor } = item;
    return (
      <div className="details">
        <div className="subject-picture">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt={name}
            width="100%"
          />
        </div>
        <div>
          <h4>{name}</h4>
          <ul className="person-data list-group list-group-flush">
            <li className="list-group-item">
              <span>Gender: </span>
              <span children={gender} />
            </li>
            <li className="list-group-item">
              <span>Birth Year: </span>
              <span children={birthYear} />
            </li>
            <li className="list-group-item">
              <span>Eye Color: </span>
              <span children={eyeColor} />
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
  renderStarship(item) {
    const { id, name, manufacturer, passengers, cargoCapacity } = item;
    return (
      <div className="details">
        <div className="subject-picture">
          <img
            src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
            alt={name}
            width="100%"
          />
        </div>
        <div>
          <h4>{name}</h4>
          <ul className="person-data list-group list-group-flush">
            <li className="list-group-item">
              <span>Manufacturer: </span>
              <span children={manufacturer} />
            </li>

            <li className="list-group-item">
              <span>Passengers: </span>
              <span children={passengers} />
            </li>

            <li className="list-group-item">
              <span>Cargo Capacity: </span>
              <span children={cargoCapacity} />
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }

  render() {
    const { item } = this.props;
    if (this.props.people) {
      return this.renderPerson(item);
    }
    if (this.props.planets) {
      return this.renderPlanet(item);
    }
    if (this.props.starships) {
      return this.renderStarship(item);
    }
  }
}
export default ItemDetailsView;
