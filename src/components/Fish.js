import React, { Component } from "react";
import "../styles/Fish.css";
import * as api from "../utils/api";
// import capitalise from "../utils/functions";
const { capitalise } = require("../utils/functions");

class Fish extends Component {
  state = {
    fish: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getFish().then((fish) => {
      this.setState({ fish, isLoading: false });
    });
  }
  render() {
    const { fish, isLoading } = this.state;
    return (
      <div className="fishBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="fish1">
            {fish.map((fish) => {
              return (
                <div className="fishSingle" key={fish.id}>
                  <p>{capitalise(fish.name["name-EUen"])}</p>
                  <img
                    className="icon"
                    alt={fish.name["name-EUen"]}
                    src={fish.icon_uri}
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
export default Fish;
