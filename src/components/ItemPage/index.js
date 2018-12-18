import React, { Component } from "react";
import ItemDetails from "./../ItemDetails";
import ItemList from "./../ItemList";
import ErrorIndicator from "../ErrorIndicator";
import SwapiService from "../../services/swapi";
import { withRouter } from "react-router-dom";

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
    const itemList = withRouter(props => {
      return (
        <ItemList
          onItemSelected={this.onPersonSelected}
          getData={this.props.getListType}
          renderItem={item => item.name}
        />
      );
    });
    const itemDetails = (
      <ItemDetails
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
