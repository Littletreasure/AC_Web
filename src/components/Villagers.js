import React, { Component } from "react";
import "../styles/Villagers.css";
import * as api from "../utils/api";

class Villagers extends Component {
  state = {
    villagers: [],
    isLoading: false,
  };

  componentDidMount() {
    api.getVillagers().then((villagers) => {
      console.log(villagers);
      this.setState({ villagers });
    });
  }
  render() {
    const { villagers } = this.state;
    return (
      <div className="villagersBody">
        <h2>Villagers</h2>

        {villagers.map((villager) => {
          return (
            <p className="villager" key={villager.id}>
              {villager.id}
              {villager.name["name-EUen"]}
            </p>
          );
        })}
      </div>
    );
  }
}
export default Villagers;
