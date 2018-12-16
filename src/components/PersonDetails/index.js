import React, { Component } from "react";
import "./styles.sass";
class PersonDetails extends Component {
  state = {};
  render() {
    return (
      <div class="jumbotron p-0 mt-4 mt-xl-0">
        <div class="details">
          <div className="subject-picture embed-responsive-item">
            <img
              src="https://www.robotshop.com/community/uploads/v/a/vabry/imported/R2D2-beer.jpg"
              alt="r2d2"
              width="100%"
            />
          </div>
          <div>
            <h3>R2D2</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Morbi leo risus</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonDetails;
