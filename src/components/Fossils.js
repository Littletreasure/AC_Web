import React, { Component } from "react";
import "../styles/Fossils.css";
import * as api from "../utils/api";
import { Link } from "@reach/router";
const { capitalise } = require("../utils/functions");

class Fossils extends Component {
  state = {
    fossils: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getInfo("fossils").then((fossils) => {
      this.setState({ fossils, isLoading: false });
    });
  }
  render() {
    const { fossils, isLoading } = this.state;
    return (
      <div className="fossilsBody">
        <h1>Fossils</h1>
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="fossils">
            {fossils.map((fossil) => {
              return (
                <div className="fossil" key={fossil["file-name"]}>
                  <Link className="link" to={`/fossils/${fossil["file-name"]}`}>
                    <p>{capitalise(fossil.name["name-EUen"])}</p>
                    <img
                      className="image"
                      alt={fossil.name["name-EUen"]}
                      src={fossil.image_uri}
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
export default Fossils;
