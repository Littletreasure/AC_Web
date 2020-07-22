import React, { Component } from "react";
import "../styles/SingleSea.css";
import * as api from "../utils/api";
const { capitalise, monthConverter } = require("../utils/functions");

class SingleSea extends Component {
  state = {
    creature: [],
    name: null,
    allYear: false,
    monthsNorth: "",
    monthsSouth: "",
    hours: "",
    isLoading: true,
  };

  componentDidMount() {
    api.getInfoById("sea", this.props.creature_id).then((creature) => {
      let monthsNorth;
      let monthsSouth;
      let hours;
      let allYear = false;
      if (creature.availability.isAllYear === true) {
        allYear = true;
      } else {
        monthsNorth = monthConverter(
          creature.availability["month-array-northern"]
        ).join(", ");
        monthsSouth = monthConverter(
          creature.availability["month-array-southern"]
        ).join(", ");
      }
      if (creature.availability.isAllDay === true) {
        hours = "All Day";
      } else {
        hours = creature.availability["time-array"].join(", ");
      }
      this.setState({
        creature,
        name: creature.name["name-EUen"],
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
      creature,
      name,
      allYear,
      monthsNorth,
      monthsSouth,
      hours,
      isLoading,
    } = this.state;
    return (
      <div className="singleCreatureBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="singleCreature">
            <p className="creatureName">{capitalise(name)}</p>
            <img
              className="creatureImage"
              alt={name}
              src={creature.image_uri}
            />

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
            <p>Location: {creature.availability.location}</p>
            <p>Shadow size: {creature.shadow}</p>
            <p>Speed: {creature.speed}</p>
            <p>Selling price: {creature.price} bells</p>
            <p>Catchphrase: {creature["catch-phrase"]}</p>
            <p>Museum phrase: {creature["museum-phrase"]}</p>
          </div>
        )}
      </div>
    );
  }
}

export default SingleSea;
