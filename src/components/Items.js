import React, { Component } from "react";
import "../styles/Items.css";
import Housewares from "./Housewares";
import Misc from "./Misc";
import WallMounted from "./WallMounted";

class Items extends Component {
  state = {
    clicked: "house",
  };
  onClick = (event) => {
    console.log(event.target.id);
    if (event.target.id === "house") {
      this.setState({ clicked: "house" });
    } else if (event.target.id === "misc") {
      this.setState({ clicked: "misc" });
    } else {
      this.setState({ clicked: "wall" });
    }
  };

  render() {
    const { clicked } = this.state;
    return (
      <div className="itemsBody">
        <h1>Items</h1>
        <div className="items">
          <div id="house" className="house" onClick={this.onClick}>
            Housewares
          </div>
          <div id="misc" className="misc" onClick={this.onClick}>
            Miscellaneous
          </div>
          <div id="wall" className="wall" onClick={this.onClick}>
            Wall Mounted
          </div>
        </div>
        {clicked === "house" ? (
          <Housewares />
        ) : clicked === "misc" ? (
          <Misc />
        ) : (
          <WallMounted />
        )}
      </div>
    );
  }
}
export default Items;
