import React from "react";
import logo from "../ac_logo.png";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}
export default Home;
