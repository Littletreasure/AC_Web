import React, { Component } from "react";
import "../styles/Misc.css";
import * as api from "../utils/api";
const { capitalise } = require("../utils/functions");

class Misc extends Component {
  state = {
    misc: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getInfo("misc").then((misc) => {
      this.setState({ misc, isLoading: false });
    });
  }
  render() {
    const { misc, isLoading } = this.state;
    return (
      <div className="miscBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="misc1">
            {misc.map((misc) => {
              return (
                <div className="miscSingle" key={misc[0].id}>
                  <p>{capitalise(misc[0].name["name-EUen"])}</p>
                  <img
                    className="icon"
                    alt={misc[0].name["name-EUen"]}
                    src={misc[0].image_uri}
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
