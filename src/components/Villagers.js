import React, { Component } from "react";
import "../styles/Villagers.css";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import VillagerSort from "./VillagerSort";
const { sortBy, filterVillager } = require("../utils/functions");

class Villagers extends Component {
  state = {
    villagers: [],
    isLoading: true,
    sort_by: "species",
    order: "",
    species: "",
  };

  componentDidMount() {
    api.getVillagers().then((villagers) => {
      this.setState({ villagers, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order, villagers } = this.state;
    const changesort = prevState.sort_by !== sort_by;
    const changeorder = prevState.order !== order;
    if (changesort || changeorder) {
      const newVillagers = sortBy(sort_by, order, villagers);
      this.setState({ villagers: newVillagers });
    }
  }
  handleChange = (event) => {
    console.log(event.target);
    const { value, id, name } = event.target;
    if (id === "sortBy") {
      this.setState({ sort_by: value });
    } else if (name === "order") {
      this.setState({ order: value });
    } else this.setState({ species: value });
  };

  render() {
    const { villagers, isLoading } = this.state;
    return (
      <div className="villagersBody">
        <h1>Villagers</h1>
        <VillagerSort handleChange={this.handleChange} />
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="villagers">
            {villagers.map((villager) => {
              return (
                <div className="villager" key={villager.id}>
                  <Link className="link" to={`/villagers/${villager.id}`}>
                    <p>{villager.name["name-EUen"]}</p>
                    <img
                      className="icon"
                      alt={villager.name["name-EUen"]}
                      src={villager.icon_uri}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default Villagers;
