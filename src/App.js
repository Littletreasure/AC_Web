import React from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Villagers from "./components/Villagers";
import Critters from "./components/Critters";
import Fossils from "./components/Fossils";
import Art from "./components/Art";

import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <Nav />
        <div className="content">
          <Router>
            <Home path="/" />
            <Villagers path="/villagers" />
            <Critters path="/critters" />
            <Fossils path="/fossils" />
            <Art path="/art" />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
