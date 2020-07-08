import React, { Component } from "react";
import "../styles/SingleFish.css";
import * as api from "../utils/api";
const { capitalise } = require("../utils/functions");

class SingleFish extends Component {
  state = {
    fish: [],
    name: null,
    isLoading: true,
  };

  componentDidMount() {
    api.getInfoById("fish", this.props.fish_id).then((fish) => {
      let months;
      if (fish.availability.isAllYear === true) {
        months = "All Year";
      } else {
        months = fish.availability["month-array-northern"];
      }
      this.setState({
        fish,
        name: fish.name["name-EUen"],
        months: months,
        hours: "1, 2, 3",
        isLoading: false,
      });
    });
  }
  render() {
    const { fish, name, months, hours, isLoading } = this.state;
    return (
      <div className="singleFishBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="singleFish">
            <p className="fishName">{capitalise(name)}</p>
            <img className="fishImage" alt={name} src={fish.image_uri} />
            <p>
              Availability: {months}, {hours}
            </p>
            <p>Location: {fish.availability.location}</p>
            <p>Rarity: {fish.availability.rarity}</p>
            <p>Shadow size: {fish.shadow}</p>
            <p>Selling price: {fish.price}</p>
            <p>Catchphrase: {fish["catch-phrase"]}</p>
            <p>Museum phrase: {fish["museum-phrase"]}</p>
          </div>
        )}
      </div>
    );
  }
}

export default SingleFish;
