import React, { Component } from "react";
import TriviaLayout from "./TriviaLayout";

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OnePlayer: false,
      TeamUp: false,
    };
    this.handleClickOnePlayer = this.handleClickOnePlayer.bind(this);
    this.handleClickTeamUp = this.handleClickTeamUp.bind(this);
  }

  handleClickOnePlayer() {
    console.log("Click happened for One Player");
    this.setState({
      OnePlayer: true,
    });
  }

  handleClickTeamUp() {
    console.log("Click happened for Team Up");
    this.setState({
      TeamUp: true,
    });
  }

  render() {
    return (
      <div>
        <TriviaLayout
          handleClickOnePlayer={this.handleClickOnePlayer}
          handleClickTeamUp={this.handleClickTeamUp}
        />
      </div>
    );
  }
}
export default GameContainer;
