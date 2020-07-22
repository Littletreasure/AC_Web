import React, { Component } from "react";
import "../styles/SingleMisc.css";
import * as api from "../utils/api";
const { capitalise } = require("../utils/functions");

class SingleMisc extends Component {
  state = {
    misc: [],
    name: null,
    isLoading: true,
  };

  componentDidMount() {
    api.getInfoById("misc", this.props.name).then((misc) => {
      this.setState({
        misc,
        name: misc.name["name-EUen"],
        isLoading: false,
      });
    });
  }
  render() {
    const { misc, name, isLoading } = this.state;
    return (
      <div className="singleMiscBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="singleMisc">
            <p className="miscName">{capitalise(name)}</p>
            <img className="miscImage" alt={name} src={misc.image_uri} />
            <p>Selling price: {misc["sell-price"]}</p>
          </div>
        )}
      </div>
    );
  }
}

export default SingleMisc;
