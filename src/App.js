import React, { Component } from 'react';
import './App.css';
import Maze from './Maze';
import Form from './Form';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      renderGame: false,
      side: 0
    }
    this.endGame = this.endGame.bind(this);
  }
  endGame(){
    this.setState({renderGame: false });
  }
  valueChanged = (side) => {
    this.setState({side: side});
    this.setState({renderGame: true });
  }
  render() {
    if(this.state.renderGame){
      return (
        <div className="App">
          <Maze sideLength={this.state.side} />
          <button type="button" onClick={this.endGame}>End Game</button>
        </div>
      );
    } else {
      return (
        <div className="Form">
          <Form onValueChange={this.valueChanged}/>
        </div>
      )
    }
  }
}

export default App;
