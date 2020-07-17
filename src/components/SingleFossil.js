import React, { Component } from "react";
import "../styles/SingleFossil.css";
import * as api from "../utils/api";
const { capitalise } = require("../utils/functions");

class SingleFossil extends Component {
  state = {
    fossil: [],
    name: null,
    isLoading: true,
  };

  componentDidMount() {
    api.getInfoById("fossils", this.props.filename).then((fossil) => {
      this.setState({
        fossil,
        name: fossil.name["name-EUen"],
        isLoading: false,
      });
    });
  }
  render() {
    const { fossil, name, isLoading } = this.state;
    return (
      <div className="singleFossilBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="singleFossil">
            <p className="fossilName">{capitalise(name)}</p>
            <img className="fossilImage" alt={name} src={fossil.image_uri} />
            <p>Selling price: {fossil.price}</p>
            <p>Museum phrase: {fossil["museum-phrase"]}</p>
          </div>
        )}
      </div>
    );
  }
}

export default SingleFossil;
