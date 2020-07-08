import React, { Component } from "react";
import "../styles/SingleInsect.css";
import * as api from "../utils/api";
const { capitalise, monthConverter } = require("../utils/functions");

class SingleInsect extends Component {
  state = {
    insect: [],
    name: null,
    allYear: false,
    monthsNorth: "",
    monthsSouth: "",
    hours: "",
    isLoading: true,
  };

  componentDidMount() {
    api.getInfoById("bugs", this.props.insect_id).then((insect) => {
      let monthsNorth;
      let monthsSouth;
      let hours;
      let allYear = false;
      if (insect.availability.isAllYear === true) {
        allYear = true;
      } else {
        monthsNorth = monthConverter(
          insect.availability["month-array-northern"]
        ).join(", ");
        monthsSouth = monthConverter(
          insect.availability["month-array-southern"]
        ).join(", ");
      }
      if (insect.availability.isAllDay === true) {
        hours = "All Day";
      } else {
        hours = insect.availability["time-array"].join(", ");
      }
      this.setState({
        insect,
        name: insect.name["name-EUen"],
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
      insect,
      name,
      allYear,
      monthsNorth,
      monthsSouth,
      hours,
      isLoading,
    } = this.state;
    return (
      <div className="singleInsectBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="singleInsect">
            <p className="insectName">{capitalise(name)}</p>
            <img className="insectImage" alt={name} src={insect.image_uri} />

            <p>Months available:</p>

            {allYear ? (
              <p>All Year</p>
            ) : (
              <>
                <p>Northern Hemisphere: {monthsNorth}</p>
                <p>Southern Hemisphere: {monthsSouth}</p>
              </>
            )}

            <p>Hours available: {hours}</p>
            <p>Location: {insect.availability.location}</p>
            <p>Rarity: {insect.availability.rarity}</p>
            <p>Selling price: {insect.price}</p>
            <p>Catchphrase: {insect["catch-phrase"]}</p>
            <p>Museum phrase: {insect["museum-phrase"]}</p>
          </div>
        )}
      </div>
    );
  }
}

export default SingleInsect;
