import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          StarDB
        </a>
        <button class="navbar-toggler">
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link">People</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Planets</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Starships</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
