import React from "react";
import "./App.css";
import logo from "./tn6.jpg";
import TriviaTeamUp from "./TriviaTeamUp";
import TriviaOnePlayer from "./TriviaOnePlayer";

function TriviaLayout({
  onePlayer,
  teamUp,
  handleClickOnePlayer,
  handleClickTeamUp,
}) {
  return (
    <div className="App">
      {!onePlayer && !teamUp && (
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
      )}
      <div>{onePlayer ? <TriviaOnePlayer /> : <TriviaTeamUp />}</div>
    </div>
  );
}

export default TriviaLayout;
