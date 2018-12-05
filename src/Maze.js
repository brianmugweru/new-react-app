import React, { Component } from 'react';
import Board from './Board';

class Maze extends Component {
  render() {
    const side = 4;
    return (
      <Board side={side} />
    )
  }
}

export default Maze;
