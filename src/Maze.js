import React, { Component } from 'react';
import Board from './Board';

class Maze extends Component {
  constructor(props){
    super(props);
    this.gameOver = this.gameOver.bind(this);
  }
  gameOver(steps){
    alert('game is over. finished in  '+steps+' steps');
  }
  render() {
    return (
      <Board side={this.props.sideLength} gameOver={this.gameOver}/>
    )
  }
}

export default Maze;
