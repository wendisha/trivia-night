import React from "react";
import "./App.css";

function TriviaOnePlayer({
  playerOne,
  playerTwo,
  playerThree,
  playerFour,
  playerFive,
  playerSix,
  handleSubmitOnePlayerForm,
  onChange,
}) {
  return (
    <div className="Intake">
      <h1>Quienes juegan?</h1>
      <form className="" onSubmit={handleSubmitOnePlayerForm}>
        <label>
          <input
            type="text"
            value={playerOne}
            onChange={onChange}
            placeholder="Player 1"
          />
        </label>
        <label>
          <input
            type="text"
            value={playerTwo}
            onChange={onChange}
            placeholder="Player 2"
          />
        </label>
        <label>
          <input
            type="text"
            value={playerThree}
            onChange={onChange}
            placeholder="Player 3"
          />
        </label>
        <label>
          <input
            type="text"
            value={playerFour}
            onChange={onChange}
            placeholder="Player 4"
          />
        </label>
        <label>
          <input
            type="text"
            value={playerFive}
            onChange={onChange}
            placeholder="Player 5"
          />
        </label>
        <label>
          <input
            type="text"
            value={playerSix}
            onChange={onChange}
            placeholder="Player 6"
          />
        </label>
        <input className="Pink-button" type="submit" value="Start" />
      </form>
    </div>
  );
}

export default TriviaOnePlayer;
