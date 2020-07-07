import React, { Component } from "react";
import "../styles/WallMounted.css";
import * as api from "../utils/api";
const { capitalise } = require("../utils/functions");

class WallMounted extends Component {
  state = {
    wall: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getInfo("wallmounted").then((wall) => {
      this.setState({ wall, isLoading: false });
    });
  }
  render() {
    const { wall, isLoading } = this.state;
    return (
      <div className="wallBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="wall1">
            {wall.map((wall) => {
              return (
                <div className="wallSingle" key={wall[0].id}>
                  <p>{capitalise(wall[0].name["name-EUen"])}</p>
                  <img
                    className="icon"
                    alt={wall[0].name["name-EUen"]}
                    src={wall[0].image_uri}
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
export default WallMounted;
