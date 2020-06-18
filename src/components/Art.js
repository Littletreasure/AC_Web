import React, { Component } from "react";
import "../styles/Art.css";
import * as api from "../utils/api";
// import capitalise from "../utils/functions";
const { capitalise } = require("../utils/functions");

class Art extends Component {
  state = {
    art: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getArt().then((art) => {
      this.setState({ art, isLoading: false });
    });
  }

  render() {
    const { art, isLoading } = this.state;
    return (
      <div className="artBody">
        <h2>Art</h2>
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="art">
            {art.map((art) => {
              return (
                <div className="artsingle" key={art["file-name"]}>
                  <p>{capitalise(art.name["name-EUen"])}</p>
                  <img
                    className="image"
                    alt={art.name["name-EUen"]}
                    src={art.image_uri}
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
export default Art;
