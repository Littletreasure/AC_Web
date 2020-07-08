import React, { Component } from "react";
import "../styles/Insects.css";
import * as api from "../utils/api";
import { Link } from "@reach/router";
const { capitalise } = require("../utils/functions");

class Insects extends Component {
  state = {
    insects: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getInfo("bugs").then((insects) => {
      this.setState({ insects, isLoading: false });
    });
  }
  render() {
    const { insects, isLoading } = this.state;
    return (
      <div className="insectsBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="insects1">
            {insects.map((insect) => {
              return (
                <div className="insect" key={insect.id}>
                  <Link className="link" to={`/insects/${insect.id}`}>
                    <p>{capitalise(insect.name["name-EUen"])}</p>
                    <img
                      className="icon"
                      alt={insect.name["name-EUen"]}
                      src={insect.icon_uri}
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
export default Insects;
