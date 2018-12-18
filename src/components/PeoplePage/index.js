import React, { Component } from "react";
import PersonDetails from "./../PersonDetails";
import ItemList from "./../ItemList";
import ErrorIndicator from "../ErrorIndicator";
class PeoplePage extends Component {
  state = { selectedPerson: 3 };
  onPersonSelected = id => {
    this.setState({
      selectedPerson: id,
      hasError: false
    });
  };
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  render() {
    if (this.state.hasError) return <ErrorIndicator />;
    return (
      <div className="row">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
