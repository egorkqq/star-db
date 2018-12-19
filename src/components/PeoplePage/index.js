import React, { Component } from "react";
import PersonDetails from "./../PersonDetails";
import ItemList from "./../ItemList";
import ErrorIndicator from "../ErrorIndicator";
import SwapiService from "../../services/swapi";
class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = { selectedItem: null, hasError: false };
  onPersonSelected = id => {
    this.setState({
      selectedItem: id
    });
  };
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  render() {
    const { people, planets, starships } = this.props;
    const itemList = (
      <ItemList
        people={people}
        planets={planets}
        starships={starships}
        onItemSelected={this.onPersonSelected}
        getData={this.props.getListType}
        renderItem={item => item.name}
      />
    );
    const itemDetails = (
      <PersonDetails
        people={people}
        planets={planets}
        starships={starships}
        getData={this.props.getDetailsType}
        personId={this.state.selectedItem}
      />
    );
    if (this.state.hasError) return <ErrorIndicator />;
    return (
      <div>
        <Row left={itemList} right={itemDetails} />
      </div>
    );
  }
}

const Row = ({ left, right }) => {
  return (
    <div className="row mt-4 ">
      <div className="col-md-6" children={left} />
      <div className="col-md-6" children={right} />
    </div>
  );
};
export default PeoplePage;
