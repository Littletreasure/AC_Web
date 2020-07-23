import React, { Component } from "react";
import { Link } from "@reach/router";
import "../styles/Nav.css";
import homebutton from "../home.png";
import * as api from "../utils/api";
import navLogo from "../ac_logo.png";

class Nav extends Component {
  state = { icon: "" };

  componentDidMount() {
    api.getPic().then((data) => {
      this.setState({ icon: data });
    });
  }
  render() {
    const { icon } = this.state;
    return (
      <div className="navList">
        <div key="home">
          <Link to="/">
            <img className="navLogo" src={navLogo} alt="logo"></img>
          </Link>
        </div>
        {/* <img className="logo" src={navLogo} alt="logo" /> */}
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
        {/* <div key="home">
          <Link to="/">
            <img className="homebutton" src={homebutton} alt="home"></img>
          </Link>
        </div> */}
        <img className="navicon" alt="villager" src={icon} />
      </div>
    );
  }
}
export default Nav;
