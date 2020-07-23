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
        name: misc[0].name["name-EUen"],
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
            <div className="miscVariants">
              {misc.map((variant) => {
                return (
                  <div className="miscVariant">
                    <p>{variant.variant}</p>
                    <img
                      className="miscImage"
                      alt={variant.variant}
                      src={variant.image_uri}
                    />
                  </div>
                );
              })}
            </div>
            {misc[0]["buy-price"] ? (
              <p>Buy price: {misc[0]["buy-price"]} bells</p>
            ) : (
              <p>Buy Price: Not for sale</p>
            )}
            <p>Selling price: {misc[0]["sell-price"]} bells</p>
            <p>Source: {misc[0].source}</p>
            {misc[0]["source-detail"] ? (
              <p>{misc[0]["source-detail"]}</p>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default SingleMisc;
