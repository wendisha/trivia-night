import React, { Component } from "react";
import TriviaLayout from "./TriviaLayout";

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onePlayer: false,
      teamUp: false,
      provisional: false,
      playerOne: "",
      playerTwo: "",
      playerThree: "",
      playerFour: "",
      playerFive: "",
      playerSix: "",
    };
    this.handleSubmitOnePlayerForm = this.handleSubmitOnePlayerForm.bind(this);
    this.handleClickOnePlayer = this.handleClickOnePlayer.bind(this);
    this.handleClickTeamUp = this.handleClickTeamUp.bind(this);
    this.handleClickProvisional = this.handleClickProvisional.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

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

  handleClickProvisional() {
    console.log("Click happened for Provisional");
    this.setState({
      provisional: true,
    });
  }

  handleSubmitOnePlayerForm() {
    this.setState({
      playerOne: "",
      playerTwo: "",
      playerThree: "",
      playerFour: "",
      playerFive: "",
      playerSix: "",
    });
  }

  render() {
    const {
      onePlayer,
      teamUp,
      provisional,
      playerOne,
      playerTwo,
      playerThree,
      playerFour,
      playerFive,
      playerSix,
    } = this.state;

    return (
      <div>
        <TriviaLayout
          onePlayer={onePlayer}
          teamUp={teamUp}
          provisional={provisional}
          playerOne={playerOne}
          playerTwo={playerTwo}
          playerThree={playerThree}
          playerFour={playerFour}
          playerFive={playerFive}
          playerSix={playerSix}
          handleSubmitOnePlayerForm={this.handleSubmitOnePlayerForm}
          handleClickOnePlayer={this.handleClickOnePlayer}
          handleClickTeamUp={this.handleClickTeamUp}
          handleClickProvisional={this.handleClickProvisional}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
export default GameContainer;
