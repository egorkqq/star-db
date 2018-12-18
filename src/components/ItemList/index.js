import React, { Component } from "react";
import SwapiService from "./../../services/swapi";
import Spinner from "./../Loader";
class ItemList extends Component {
  swapiService = new SwapiService();
  state = {
    peopleList: null
  };
  componentDidMount() {
    this.swapiService.getAllPeople().then(peopleList =>
      this.setState({
        peopleList
      })
    );
  }
  renderItems = arr => {
    return arr.map(el => {
      return (
        <li
          onClick={() => this.props.onItemSelected(el.id)}
          key={el.id}
          className="list-group-item list-group-item-action "
          children={el.name}
        />
      );
    });
  };
  render() {
    const { peopleList } = this.state;
    if (!peopleList) return <Spinner />;

    return (
      <div className="list-group fluid ">{this.renderItems(peopleList)}</div>
    );
  }
}

export default ItemList;
