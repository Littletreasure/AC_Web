import React, { Component } from "react";
import "../styles/SingleHouse.css";
import * as api from "../utils/api";
const { capitalise } = require("../utils/functions");

class SingleHouseware extends Component {
  state = {
    house: [],
    name: null,
    isLoading: true,
  };

  componentDidMount() {
    api.getInfoById("houseware", this.props.name).then((house) => {
      this.setState({
        house,
        name: house[0].name["name-EUen"],
        isLoading: false,
      });
    });
  }
  render() {
    const { house, name, isLoading } = this.state;
    return (
      <div className="singleHouseBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="singleHouse">
            {name === "study chair" ? (
              <p className="wallName">Writing Chair</p>
            ) : name === "study desk" ? (
              <p className="wallName">Writing Desk</p>
            ) : (
              <p className="houseName">{capitalise(name)}</p>
            )}
            <div className="houseVariants">
              {house.map((variant) => {
                return (
                  <div className="houseVariant">
                    <p>{variant.variant}</p>
                    <img
                      className="houseImage"
                      alt={variant.variant}
                      src={variant.image_uri}
                    />
                  </div>
                );
              })}
            </div>
            {house[0]["buy-price"] ? (
              <p>Buy price: {house[0]["buy-price"]} bells</p>
            ) : (
              <p>Buy Price: Not for sale</p>
            )}

            <p>Sell price: {house[0]["sell-price"]} bells</p>
            <p>Source: {house[0].source}</p>
            {house[0]["source-detail"] ? (
              <p>{house[0]["source-detail"]}</p>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default SingleHouseware;
