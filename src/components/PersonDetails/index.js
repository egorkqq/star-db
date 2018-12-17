import React, { Component } from "react";
import "./styles.sass";
class PersonDetails extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron p-0 mt-4 mt-md-0 mt-xl-0">
        <div className="details">
          <div className="subject-picture">
            <img
              src="https://www.robotshop.com/community/uploads/v/a/vabry/imported/R2D2-beer.jpg"
              alt="r2d2"
              width="100%"
            />
          </div>
          <div>
            <h4>R2D2</h4>
            <ul className="person-data list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonDetails;
