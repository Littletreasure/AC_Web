import React, { Component } from "react";
import "../styles/Housewares.css";
import * as api from "../utils/api";
import { Link } from "@reach/router";
const { capitalise, itemSort } = require("../utils/functions");

class Housewares extends Component {
  state = {
    house: [],
    name: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getItem("houseware").then((house) => {
      const name = itemSort(Object.keys(house));
      this.setState({
        house,
        name,
        isLoading: false,
      });
    });
  }
  render() {
    const { house, name, isLoading } = this.state;
    return (
      <div className="houseBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="house1">
            {name.map((item) => {
              return (
                <div
                  className="houseSingle"
                  key={house[item][0]["internal-id"]}
                >
                  <Link className="link" to={`/houseware/${item}`}>
                    <p>{capitalise(house[item][0].name["name-EUen"])}</p>
                    <img
                      className="icon"
                      alt={house[item][0].name["name-EUen"]}
                      src={house[item][0].image_uri}
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
export default Housewares;
