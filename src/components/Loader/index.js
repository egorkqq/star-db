import React, { Component } from "react";
import "./loader.css";

class Spinner extends Component {
  state = {};
  render() {
    return (
      <div class="lds-css ng-scope">
        <div class="lds-flickr">
          <div />
          <div />
          <div />
        </div>
        <style type="text/css" />
      </div>
    );
  }
}

export default Spinner;
