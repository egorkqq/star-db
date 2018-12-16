import React, { Component } from "react";
import "./styles.sass";
class RandomPlanet extends Component {
  state = {};
  render() {
    return (
      <div class="jumbotron jumbotron-fluid mt-4 p-0">
        <div class="random-planet">
          <div className="planet-image embed-responsive-item">
            <img
              src="https://starwars.ru/media/cache/ce/1b/ce1bd0373e9ef1b3368773b1b6cb153c.png"
              alt="Death Star"
              width="100%"
            />
          </div>
          <div className="planet-info">
            <h3>Star of the Death</h3>
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

export default RandomPlanet;
