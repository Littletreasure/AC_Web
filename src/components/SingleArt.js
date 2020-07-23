import React, { Component } from "react";
import "../styles/SingleArt.css";
import * as api from "../utils/api";
const { capitalise } = require("../utils/functions");

class SingleArt extends Component {
  state = {
    art: [],
    name: null,
    isLoading: true,
  };

  componentDidMount() {
    api.getInfoById("art", this.props.art_id).then((art) => {
      this.setState({
        art,
        name: art.name["name-EUen"],
        isLoading: false,
      });
    });
  }
  render() {
    const { art, name, isLoading } = this.state;
    return (
      <div className="singleArtBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="singleArt">
            <p className="artName">{capitalise(name)}</p>
            <img className="artImage" alt={name} src={art.image_uri} />
            <p>Selling price: {art["sell-price"]} bells</p>
            {art.hasFake ? <p>Has fake?: Yes</p> : <p>Has fake?: No</p>}
            <p>Museum description: {art["museum-desc"]}</p>
          </div>
        )}
      </div>
    );
  }
}

export default SingleArt;
