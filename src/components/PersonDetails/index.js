import React, { Component } from "react";
import "./styles.sass";
import SwapiService from "./../../services/swapi";
import Spinner from "../Loader";
import ErrorButton from "../ErrorButton";
class PersonDetails extends Component {
  swapiService = new SwapiService();
  state = {
    person: null,
    loading: true
  };
  componentDidMount() {
    console.log("cdm");
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) this.updatePerson();
  }
  updatePerson() {
    const { personId } = this.props;
    this.setState({ loading: true });
    if (!personId) {
      return;
    }
    this.swapiService.getPerson(personId).then(person => {
      this.setState({
        person,
        loading: false
      });
    });
  }
  render() {
    const { person, loading } = this.state;
    return (
      <div className="jumbotron p-1 mt-4 mt-md-0 mt-xl-0">
        {!this.state.person ? (
          <span>Select a person from a list</span>
        ) : loading ? (
          <Spinner />
        ) : (
          <PersonDetailsView person={person} />
        )}
      </div>
    );
  }
}

const PersonDetailsView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;
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
};

export default PersonDetails;
