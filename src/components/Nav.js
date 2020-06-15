import React, { Component } from "react";
import { Link } from "@reach/router";
import "../styles/Nav.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="navList">
        <div key="vill">
          <Link className="link" to="/villagers">
            <h3>Villagers</h3>
          </Link>
        </div>
        <div key="crit">
          <Link className="link" to="/critters">
            <h3>Critters</h3>
          </Link>
        </div>
        <div key="foss">
          <Link className="link" to="/fossils">
            <h3>Fossils</h3>
          </Link>
        </div>
        <div key="art">
          <Link className="link" to="/art">
            <h3>Art</h3>
          </Link>
        </div>
        <h2>Songs</h2>

        <h2>Items</h2>
      </div>
    );
  }
}
export default Nav;
