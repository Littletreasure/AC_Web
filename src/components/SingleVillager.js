import React, { Component } from "react";
import "../styles/SingleVillager.css";
import * as api from "../utils/api";

class SingleVillager extends Component {
  state = {
    villager: [],
    name: null,
    isLoading: true,
  };

  componentDidMount() {
    api.getVillagerById(this.props.villager_id).then((villager) => {
      this.setState({
        villager,
        name: villager.name["name-EUen"],
        isLoading: false,
      });
    });
  }
  render() {
    const { villager, name, isLoading } = this.state;
    return (
      <div className="singleVillagerBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="singleVillager">
            <p className="villagerName">{name}</p>
            <img className="villImage" alt={name} src={villager.image_uri} />
            <p>Species: {villager.species}</p>
            <p>Personality: {villager.personality}</p>
            <p>Birthday: {villager["birthday-string"]}</p>
            <p>Catchphrase: {villager["catch-phrase"]}</p>
          </div>
        )}
      </div>
    );
  }
}

export default SingleVillager;
