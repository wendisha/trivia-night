import React from "react";
import "./App.css";
import logo from "./tn6.jpg";
// import TriviaTeamUp from "./TriviaTeamUp";
import TriviaProvisional from "./TriviaProvisional";
import TriviaOnePlayer from "./TriviaOnePlayer";

function TriviaLayout({
  onePlayer,
  teamUp,
  provisional,
  playerOne,
  playerTwo,
  playerThree,
  playerFour,
  playerFive,
  playerSix,
  handleSubmitOnePlayerForm,
  handleClickOnePlayer,
  handleClickTeamUp,
  handleClickProvisional,
  onChange,
}) {
  return (
    <div className="App">
      {!onePlayer && !teamUp && !provisional && (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-title">Version 1.0: LA TERTULIA</p>
          <button className="Blue-button" onClick={handleClickProvisional}>
            JUGAR
          </button>
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
      <div>
        {onePlayer ? (
          <TriviaOnePlayer
            playerOne={playerOne}
            playerTwo={playerTwo}
            playerThree={playerThree}
            playerFour={playerFour}
            playerFive={playerFive}
            playerSix={playerSix}
            handleSubmitOnePlayerForm={handleSubmitOnePlayerForm}
            onChange={onChange}
          />
        ) : (
          <TriviaProvisional />
        )}
      </div>
    </div>
  );
}

export default TriviaLayout;
