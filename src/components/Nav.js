import React, { Component } from "react";
import { Link } from "@reach/router";
import "../styles/Nav.css";
import homebutton from "../home.png";

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
        <div key="songs">
          <Link className="link" to="/songs">
            <h3>Songs</h3>
          </Link>
        </div>
        <div key="items">
          <Link className="link" to="/items">
            <h3>Items</h3>
          </Link>
        </div>
        <div key="home">
          <Link to="/">
            <img className="homebutton" src={homebutton} alt="home"></img>
          </Link>
        </div>
      </div>
    );
  }
}
export default Nav;
