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
render(){
  return(
    <div className="style">
      <div>
      <PlayerCard sign={this.state.playerOne}/>
      <PlayerCard sign={this.state.playerTwo}/>

      <PlayerCard/>
      </div>
    <div className="winner">Winner</div>
    <button type="button" onClick={this.playGame}>Play the Game</button>
    </div>

  )
}
}

export default Game;
