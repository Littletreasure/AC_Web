import React, { Component } from "react";
import "../styles/SingleWall.css";
import * as api from "../utils/api";
const { capitalise } = require("../utils/functions");

class SingleWallMounted extends Component {
  state = {
    wall: [],
    name: null,
    isLoading: true,
  };

  componentDidMount() {
    api.getInfoById("wallmounted", this.props.name).then((wall) => {
      this.setState({
        wall,
        name: wall[0].name["name-EUen"],
        isLoading: false,
      });
    });
  }
  render() {
    const { wall, name, isLoading } = this.state;
    return (
      <div className="singleWallBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="singleWall">
            {name === "study poster" ? (
              <p className="wallName">Writing Poster</p>
            ) : (
              <p className="wallName">{capitalise(name)}</p>
            )}
            <div className="wallVariants">
              {wall.map((variant) => {
                return (
                  <div className="wallVariant">
                    <p>{variant.variant}</p>
                    <img
                      className="wallImage"
                      alt={variant.variant}
                      src={variant.image_uri}
                    />
                  </div>
                );
              })}
            </div>
            {wall[0]["buy-price"] ? (
              <p>Buy price: {wall[0]["buy-price"]} bells</p>
            ) : (
              <p>Buy Price: Not for sale</p>
            )}

            <p>Sell price: {wall[0]["sell-price"]} bells</p>
            <p>Source: {wall[0].source}</p>
            {wall[0]["source-detail"] ? (
              <p>{wall[0]["source-detail"]}</p>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default SingleWallMounted;
