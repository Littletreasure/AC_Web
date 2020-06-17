import React, { Component } from "react";
import "../styles/Villagers.css";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class Villagers extends Component {
  state = {
    villagers: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getVillagers().then((villagers) => {
      this.setState({ villagers, isLoading: false });
    });
  }
  render() {
    const { villagers, isLoading } = this.state;
    return (
      <div className="villagersBody">
        <h1>Villagers</h1>
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
