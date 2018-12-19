import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  state = { menuOpened: false };

  openMenu = e => {
    this.setState({
      menuOpened: !this.state.menuOpened
    });
  };
  render() {
    const style = this.state.menuOpened
      ? " navbar-collapse"
      : "collapse navbar-collapse";
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          StarDB
        </Link>
        <button onClick={this.openMenu} className="navbar-toggler">
          <span className="navbar-toggler-icon" />
        </button>
        <div className={style} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/people" className="nav-link">
                People
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/planets" className="nav-link">
                Planets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/starships" className="nav-link">
                Starships
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
