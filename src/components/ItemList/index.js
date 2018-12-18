import React, { Component } from "react";
import Spinner from "./../Loader";
class ItemList extends Component {
  state = {
    itemList: null
  };
  componentDidMount() {
    const { getData } = this.props;
    getData().then(itemList =>
      this.setState({
        itemList
      })
    );
  }
  renderItems = arr => {
    return arr.map(item => {
      const label = this.props.renderItem(item);
      return (
        <li
          onClick={() => this.props.onItemSelected(item.id)}
          key={item.id}
          className="list-group-item list-group-item-action "
          children={label}
        />
      );
    });
  };
  render() {
    const { itemList } = this.state;
    if (!itemList) return <Spinner />;

    return (
      <div className="list-group fluid ">{this.renderItems(itemList)}</div>
    );
  }
}

export default ItemList;
