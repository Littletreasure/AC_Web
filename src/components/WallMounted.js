import React, { Component } from "react";
import "../styles/WallMounted.css";
import * as api from "../utils/api";
import { Link } from "@reach/router";
const { capitalise, itemSort } = require("../utils/functions");

class WallMounted extends Component {
  state = {
    wall: [],
    name: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getItem("wallmounted").then((wall) => {
      const name = itemSort(Object.keys(wall));
      this.setState({ wall, name, isLoading: false });
    });
  }
  render() {
    const { wall, name, isLoading } = this.state;
    return (
      <div className="wallBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="wall1">
            {name.map((item) => {
              return (
                <div className="wallSingle" key={wall[item][0]["internal-id"]}>
                  <Link className="link" to={`/wallmounted/${item}`}>
                    {wall[item][0].name["name-EUen"] === "study poster" ? (
                      <p>Writing Poster</p>
                    ) : (
                      <p>{capitalise(wall[item][0].name["name-EUen"])}</p>
                    )}
                    <img
                      className="icon"
                      alt={wall[item][0].name["name-EUen"]}
                      src={wall[item][0].image_uri}
                    />
                  </Link>
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
