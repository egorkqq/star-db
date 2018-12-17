import React, { Component } from "react";
class ItemList extends Component {
  state = {};
  render() {
    return (
      <div className="list-group fluid ">
        <a href="#" className="list-group-item list-group-item-action ">
          Luke
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Darth
        </a>
        <a href="#" className="list-group-item list-group-item-action active">
          R2D2
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Mr.Roboto
        </a>
      </div>
    );
  }
}

export default ItemList;
