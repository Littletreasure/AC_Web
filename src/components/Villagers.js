import React, { Component } from "react";
import "../styles/Villagers.css";
import * as api from "../utils/api";

class Villagers extends Component {
  state = {
    villagers: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getVillagers().then((villagers) => {
      this.setState({ villagers });
    });
  }
  render() {
    const { villagers } = this.state;
    return (
      <div className="villagersBody">
        <h1>Villagers</h1>
        <div className="villagers">
          {villagers.map((villager) => {
            return (
              <div className="villager" key={villager.id}>
                <p>{villager.name["name-EUen"]}</p>
                <img
                  className="icon"
                  alt={villager.name["name-EUen"]}
                  src={villager.icon_uri}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Villagers;
