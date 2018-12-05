import React, { Component } from 'react';

class Board extends Component {
  constructor(props){
    super(props);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.totem = parseInt(5/2)+''+parseInt(5/2);
    var items = [];
    for(var i = 0; i < 5; i++) {
      for(var j = 0; j < 5; j++) {
        items.push(i+''+j);
      }
    }
    this.items = items.sort(() => 0.5-Math.random()).slice(0, 5);
    this.count = 0;
  }
  handleLeftClick(event){
    if(event.keyCode === 87){
      const value = this.totem;
      let firstDigit = value.toString().charAt(0);
      let lastDigit = value.toString().charAt(1);
      let hello = firstDigit > 0 ? firstDigit -= 1 : firstDigit;
      this.totem = hello+''+lastDigit;
      if(this.items.includes(this.totem)){
        let i = this.items.indexOf(this.totem);
        if (i !== -1) {
          this.items.splice(i, 1);
        }
      }
      this.forceUpdate();
    }
    if(event.keyCode === 65) {
      const value = this.totem;
      let firstDigit = value.toString().charAt(0);
      let lastDigit = value.toString().charAt(1);
      let last = lastDigit > 0 ? lastDigit -= 1 : lastDigit;
      this.totem = firstDigit+''+last;
      if(this.items.includes(this.totem)){
        let i = this.items.indexOf(this.totem);
        if (i !== -1) {
          this.items.splice(i, 1);
        }
      }
      this.forceUpdate();
    }
    if(event.keyCode === 16) {
      const value = this.totem;
      let firstDigit = value.toString().charAt(0);
      let lastDigit = value.toString().charAt(1);
      let first = firstDigit < 4 ? firstDigit = parseInt(firstDigit) + 1 : firstDigit;
      this.totem = first+''+lastDigit;
      if(this.items.includes(this.totem)){
        let i = this.items.indexOf(this.totem);
        if (i !== -1) {
          this.items.splice(i, 1);
        }
      }
      this.forceUpdate();
    }
    if(event.keyCode === 83) {
      const value = this.totem;
      let firstDigit = value.toString().charAt(0);
      let lastDigit = value.toString().charAt(1);
      let last = lastDigit < 4 ? lastDigit = parseInt(lastDigit) + 1 : lastDigit;
      this.totem = firstDigit+''+last;
      if(this.items.includes(this.totem)){
        let i = this.items.indexOf(this.totem);
        if (i !== -1) {
          this.items.splice(i, 1);
        }
      }
      this.forceUpdate();
    }
  }
  renderSquare = (i, key, middle, spots) => {
    return (
      <span key={i} className={`square ${i===middle ? 'bg-white' : 'bg-red'} ${spots.includes(i) ? 'bg-black' : 'bg-white'}` }>
      </span>
    );
  }
  setTotem = (size) => {
    this.totem = parseInt(size/2)+''+parseInt(size/2);
  }
  componentDidMount(){
    document.addEventListener("keydown", this.handleLeftClick, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleLeftClick, false);
  }
  render() {
    const rowCount = 5, colCount = 5;
    return (
      <div>
        {[...new Array(rowCount)].map((x, rowIndex) => {
          return (
            <div className="board-row" key={rowIndex}>
              {[...new Array(colCount)].map((y, colIndex) => this.renderSquare(rowIndex+''+colIndex, rowIndex*colCount + colIndex, this.totem, this.items) )}
            </div>
          )
        })
        }
      </div>
    );
  }
}

export default Board;
