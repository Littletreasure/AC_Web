import React, { Component } from "react";
import "../styles/Critters.css";
import Fish from "./Fish";
import Insects from "./Insects";
import SeaCreatures from "./SeaCreatures";

class Critters extends Component {
  state = {
    clicked: "fish",
  };
  onClick = (event) => {
    console.log(event.target.id);
    if (event.target.id === "fish") {
      this.setState({ clicked: "fish" });
    } else if (event.target.id === "insects") {
      this.setState({ clicked: "insects" });
    } else {
      this.setState({ clicked: "creatures" });
    }
  };
  render() {
    const { clicked } = this.state;
    return (
      <div className="crittersBody">
        <h1>Critters</h1>
        <div className="critters">
          <div id="fish" className="fish" onClick={this.onClick}>
            Fish
          </div>
          <div id="insects" className="insects" onClick={this.onClick}>
            Insects
          </div>
          <div id="creatures" className="creatures" onClick={this.onClick}>
            Sea Creatures
          </div>
        </div>
        {clicked === "fish" ? (
          <Fish />
        ) : clicked === "insects" ? (
          <Insects />
        ) : (
          <SeaCreatures />
        )}
      </div>
    );
  }
}
export default Critters;
