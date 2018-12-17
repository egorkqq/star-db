import React, { Component } from "react";
import "./loader.css";

class Spinner extends Component {
  state = {};
  render() {
    return (
      <div className="lds-css ng-scope ">
        <div className="lds-flickr">
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
