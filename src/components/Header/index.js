import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          StarDB
        </a>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <p className="nav-link">People</p>
            </li>
            <li className="nav-item">
              <p className="nav-link">Planets</p>
            </li>
            <li className="nav-item">
              <p className="nav-link">Starships</p>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
