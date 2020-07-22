import React, { Component } from "react";
import "../styles/Misc.css";
import * as api from "../utils/api";
const { capitalise } = require("../utils/functions");

class Misc extends Component {
  state = {
    misc: [],
    name: "",
    isLoading: true,
  };

  componentDidMount() {
    api.getItem("misc").then((misc) => {
      this.setState({ misc, name: Object.keys(misc), isLoading: false });
    });
  }
  render() {
    const { misc, name, isLoading } = this.state;
    return (
      <div className="miscBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="misc1">
            {name.map((item) => {
              return (
                <div className="miscSingle" key={misc[item][0]["internal-id"]}>
                  <p>{capitalise(misc[item][0].name["name-EUen"])}</p>
                  <img
                    className="icon"
                    alt={misc[item][0].name["name-EUen"]}
                    src={misc[item][0].image_uri}
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
export default Misc;
