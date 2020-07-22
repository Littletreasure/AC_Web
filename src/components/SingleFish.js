import React, { Component } from "react";
import "../styles/SingleFish.css";
import * as api from "../utils/api";
const { capitalise, monthConverter } = require("../utils/functions");

class SingleFish extends Component {
  state = {
    fish: [],
    name: null,
    allYear: false,
    monthsNorth: "",
    monthsSouth: "",
    hours: "",
    isLoading: true,
  };

  componentDidMount() {
    api.getInfoById("fish", this.props.fish_id).then((fish) => {
      let monthsNorth;
      let monthsSouth;
      let hours;
      let allYear = false;
      if (fish.availability.isAllYear === true) {
        allYear = true;
      } else {
        monthsNorth = monthConverter(
          fish.availability["month-array-northern"]
        ).join(", ");
        monthsSouth = monthConverter(
          fish.availability["month-array-southern"]
        ).join(", ");
      }
      if (fish.availability.isAllDay === true) {
        hours = "All Day";
      } else {
        hours = fish.availability["time-array"].join(", ");
      }
      this.setState({
        fish,
        name: fish.name["name-EUen"],
        allYear: allYear,
        monthsNorth: monthsNorth,
        monthsSouth: monthsSouth,
        hours: hours,
        isLoading: false,
      });
    });
  }
  render() {
    const {
      fish,
      name,
      allYear,
      monthsNorth,
      monthsSouth,
      hours,
      isLoading,
    } = this.state;
    return (
      <div className="singleFishBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="singleFish">
            <p className="fishName">{capitalise(name)}</p>
            <img className="fishImage" alt={name} src={fish.image_uri} />

            {allYear ? (
              <p>Months available: All Year</p>
            ) : (
              <>
                <p>Months available:</p>
                <p>Northern Hemisphere: {monthsNorth}</p>
                <p>Southern Hemisphere: {monthsSouth}</p>
              </>
            )}

            <p>Hours available: {hours}</p>
            <p>Location: {fish.availability.location}</p>
            <p>Rarity: {fish.availability.rarity}</p>
            <p>Shadow size: {fish.shadow}</p>
            <p>Selling price: {fish.price} bells</p>
            <p>Catchphrase: {fish["catch-phrase"]}</p>
            <p>Museum phrase: {fish["museum-phrase"]}</p>
          </div>
        )}
      </div>
    );
  }
}

export default SingleFish;
