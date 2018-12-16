import React, { Component } from "react";
class ItemList extends Component {
  state = {};
  render() {
    return (
      <div class="list-group fluid ">
        <a href="#" class="list-group-item list-group-item-action ">
          Luke
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          Darth
        </a>
        <a href="#" class="list-group-item list-group-item-action active">
          R2D2
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          Mr.Roboto
        </a>
      </div>
    );
  }
}

export default ItemList;
