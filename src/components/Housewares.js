import React, { Component } from "react";
import "../styles/Housewares.css";
import * as api from "../utils/api";
const { capitalise } = require("../utils/functions");

class Housewares extends Component {
  state = {
    house: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getInfo("houseware").then((house) => {
      this.setState({ house, isLoading: false });
    });
  }
  render() {
    const { house, isLoading } = this.state;
    return (
      <div className="houseBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="house1">
            {house.map((house) => {
              return (
                <div className="houseSingle" key={house[0].id}>
                  <p>{capitalise(house[0].name["name-EUen"])}</p>
                  <img
                    className="icon"
                    alt={house[0].name["name-EUen"]}
                    src={house[0].image_uri}
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
export default Housewares;
