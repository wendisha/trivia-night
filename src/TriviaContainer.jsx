import React, { Component } from "react";
import TriviaLayout from "./TriviaLayout";

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClickOnePlayer = this.handleClickOnePlayer.bind(this);
    this.handleClickTeamUp = this.handleClickTeamUp.bind(this);
  }

  handleClickOnePlayer() {
    console.log("Click happened");
  }

  handleClickTeamUp() {
    console.log("Click happened");
  }

  render() {
    return (
      <div>
        <TriviaLayout />
      </div>
    );
  }
}
export default GameContainer;
