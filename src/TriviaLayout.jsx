import React from "react";
import logo from "./tn6.jpg";
import "./App.css";

function TriviaLayout({ handleClickOnePlayer, handleClickTeamUp }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-title">Version 1.0: LA TERTULIA</p>
        <div className="flex-container">
          <button className="Pink-button" onClick={handleClickOnePlayer}>
            Individual
          </button>
          <button className="Green-button" onClick={handleClickTeamUp}>
            Equipos
          </button>
        </div>
      </header>
    </div>
  );
}

export default TriviaLayout;
