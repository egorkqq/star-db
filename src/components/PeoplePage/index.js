import React, { Component } from "react";
import PersonDetails from "./../PersonDetails";
import ItemList from "./../ItemList";
import ErrorIndicator from "../ErrorIndicator";
import SwapiService from "../../services/swapi";
const Row = ({ left, right }) => {
  return (
    <div className="row mt-4 ">
      <div className="col-md-6" children={left} />
      <div className="col-md-6" children={right} />
    </div>
  );
};
class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = { selectedPerson: null, hasError: false };
  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.props.getDataType}
        renderItem={item => `${item.name + " " + item.id}`}
      />
    );
    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );
    if (this.state.hasError) return <ErrorIndicator />;
    return (
      <div>
        <Row left={itemList} right={personDetails} />
      </div>
    );
  }
}

export default PeoplePage;
