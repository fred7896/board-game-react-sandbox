import React, { Component } from 'react';
import './App.css';
import PlayerSelect from './containers/PlayerSelect';
import Game from './containers/Game';
import Players from './components/Players';

class App extends Component {
  state = {
    players: [],
    gameStarted: false
  };

  startGame = (players) => {
    this.setState({
      players,
      gameStarted:true
    });
  }
  render() {
    return (
      <div className="App container-fluid">
      <Players players = {this.state.players} />
      {
        this.state.gameStarted ? 
        <Game players = {this.state.players} /> :
        <PlayerSelect startGame={this.startGame}/>
      }
      </div>
    );
  }
}

export default App;
