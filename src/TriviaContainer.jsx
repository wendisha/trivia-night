import React, { Component } from "react";
import TriviaLayout from "./TriviaLayout";

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onePlayer: false,
      teamUp: false,
    };
    this.handleClickOnePlayer = this.handleClickOnePlayer.bind(this);
    this.handleClickTeamUp = this.handleClickTeamUp.bind(this);
  }

  handleClickOnePlayer() {
    console.log("Click happened for One Player");
    this.setState({
      onePlayer: true,
    });
  }

  handleClickTeamUp() {
    console.log("Click happened for Team Up");
    this.setState({
      teamUp: true,
    });
  }

  render() {
    const { onePlayer, teamUp } = this.state;

    return (
      <div>
        <TriviaLayout
          onePlayer={onePlayer}
          teamUp={teamUp}
          handleClickOnePlayer={this.handleClickOnePlayer}
          handleClickTeamUp={this.handleClickTeamUp}
        />
      </div>
    );
  }
}
export default GameContainer;
