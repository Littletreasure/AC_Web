import React, { Component } from "react";
import "../styles/SeaCreatures.css";
import * as api from "../utils/api";
const { capitalise } = require("../utils/functions");

class SeaCreatures extends Component {
  state = {
    creatures: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getInfo("sea").then((creatures) => {
      this.setState({ creatures, isLoading: false });
    });
  }
  render() {
    const { creatures, isLoading } = this.state;
    return (
      <div className="creaturesBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="creatures1">
            {creatures.map((creature) => {
              return (
                <div className="creature" key={creature.id}>
                  <p>{capitalise(creature.name["name-EUen"])}</p>
                  <img
                    className="icon"
                    alt={creature.name["name-EUen"]}
                    src={creature.icon_uri}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default SeaCreatures;
