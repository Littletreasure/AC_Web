import React from "react";
import logo from "../acnh_logo.png";
import boy from "../Boy.png";
import girl from "../Girl.png";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <img className="logo" src={logo} alt="logo" />
      <p className="description">
        Animal Crossing: New Horizons is the fifth in a series of games from
        Nintendo. The original Animal Crossing game was released in 2001. It is
        a real time simulation game where the main human character lives on an
        island inhabited by animals. You can expand and decorate your house, go
        fishing, catch insects and swim in the sea. You can visit other islands
        and make new friends. During the year, there are many special events.
        For more information see{" "}
        <a href="https://en.wikipedia.org/wiki/Animal_Crossing" target="blank">
          Wikipedia
        </a>
        .
      </p>

      <div className="charPics">
        <img className="char" src={boy} alt="boy" />
        <img className="char" src={girl} alt="girl" />
      </div>
    </div>
  );
}
export default Home;
