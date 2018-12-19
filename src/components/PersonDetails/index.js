import React, { Component } from "react";
import "./styles.sass";
import SwapiService from "./../../services/swapi";
import Spinner from "../Loader";
import PersonDetailsView from "./PersonDetailsView";
class PersonDetails extends Component {
  swapiService = new SwapiService();
  state = {
    item: null,
    loading: true
  };
  componentDidMount() {
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
    this.props.getData(personId).then(item => {
      this.setState({
        item,
        loading: false
      });
    });
  }
  render() {
    const { item, loading } = this.state;
    const { people, planets, starships } = this.props;
    return (
      <div className="jumbotron p-1 mt-4 mt-md-0 mt-xl-0">
        {!this.state.item ? (
          <span>Select a person from a list</span>
        ) : loading ? (
          <Spinner />
        ) : (
          <PersonDetailsView
            people={people}
            planets={planets}
            starships={starships}
            item={item}
          />
        )}
      </div>
    );
  }
}

export default PersonDetails;
