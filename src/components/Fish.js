import React, { Component } from "react";
import "../styles/Fish.css";
import * as api from "../utils/api";
import { Link } from "@reach/router";
const { capitalise } = require("../utils/functions");

class Fish extends Component {
  state = {
    fish: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getInfo("fish").then((fish) => {
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
                  <Link className="link" to={`/fish/${fish.id}`}>
                    <p>{capitalise(fish.name["name-EUen"])}</p>
                    <img
                      className="icon"
                      alt={fish.name["name-EUen"]}
                      src={fish.icon_uri}
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
export default Fish;
