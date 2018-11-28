import React, {Component} from 'react';
import PlayerCard from "./PlayerCard";
import './App.css';

class Game extends Component{
constructor(){
    super();
    this.signs=["rock","scissors","paper"]; // Where does this come from?
    this.state={
      playerOne:"rock",
      playerTwo: "scissors"
    }
  }

// We put our methods here...
playGame=()=>{
  this.setState({
    playerOne:this.signs[Math.floor(Math.random()*3)],
    playerTwo:this.signs[Math.floor(Math.random()*3)]
  })
}
decideWinner = () => {
  const p1=this.state.playerOne
  const p2 = this.state.playerTwo

  if (p1 === p2) {
    return "It's a Tie!"
  }
  else if ((p1 === "rock" && p2 === "scissors") || (p1 === "scissors" && p2 === "paper") || (p1 === "paper" && p2 === "rock"))
    return "Player One Wins!"
  else {
    return "Player Two Wins!"
  }
}
render(){
  return(
    <div className="style">
      <div>
      <PlayerCard sign={this.state.playerOne}/>
      <PlayerCard sign={this.state.playerTwo}/>

      <PlayerCard/>
      </div>
    <div className="winner">{this.decideWinner()}</div>
    <button type="button" onClick={this.playGame}>Play the Game</button>
    </div>

  )
}
}

export default Game;
