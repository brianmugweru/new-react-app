import React, { Component } from 'react';

class Board extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.totem = parseInt(props.side/2)+''+parseInt(props.side/2);
    var items = [];
    for(var i = 0; i < parseInt(props.side); i++) {
      for(var j = 0; j < parseInt(props.side); j++) {
        items.push(i+''+j);
      }
    }
    this.items = items.sort(() => 0.5-Math.random()).slice(0, parseInt(props.side));
    this.count = 0;
  }
  handleClick(event){
    if(event.keyCode === 38){
      const value = this.totem;
      let firstDigit = value.toString().charAt(0);
      let lastDigit = value.toString().charAt(1);
      let newDigit;
      if(firstDigit > 0){
          newDigit = firstDigit-1;
          this.count ++;
      } else {
          newDigit = firstDigit;
      }
      this.totem = newDigit+''+lastDigit;
      if(this.items.includes(this.totem)){
        let i = this.items.indexOf(this.totem);
        if (i !== -1) {
          this.items.splice(i, 1);
          if(this.items.length === 0) {
            this.props.gameOver(this.count); 
          }
        }
      }
      this.forceUpdate();
    }
    if(event.keyCode === 37) {
      const value = this.totem;
      let firstDigit = value.toString().charAt(0);
      let lastDigit = value.toString().charAt(1);
      let newDigit;
      if(lastDigit > 0){
          newDigit = lastDigit-1;
          this.count ++;
      } else {
          newDigit = lastDigit;
      }
      this.totem = firstDigit+''+newDigit;
      if(this.items.includes(this.totem)){
        let i = this.items.indexOf(this.totem);
        if (i !== -1) {
          this.items.splice(i, 1);
          if(this.items.length === 0) {
            this.props.gameOver(this.count); 
          }
        }
      }
      this.forceUpdate();
    }
    if(event.keyCode === 40) {
      const value = this.totem;
      let firstDigit = value.toString().charAt(0);
      let lastDigit = value.toString().charAt(1);
      let newDigit;
      if(firstDigit < parseInt(this.props.side)-1){
          newDigit = parseInt(firstDigit)+1;
          this.count ++;
      } else {
          newDigit = firstDigit;
      }
      this.totem = newDigit+''+lastDigit;
      if(this.items.includes(this.totem)){
        let i = this.items.indexOf(this.totem);
        if (i !== -1) {
          this.items.splice(i, 1);
          if(this.items.length === 0) {
            this.props.gameOver(this.count); 
          }
        }
      }
      this.forceUpdate();
    }
    if(event.keyCode === 39) {
      const value = this.totem;
      let firstDigit = value.toString().charAt(0);
      let lastDigit = value.toString().charAt(1);
      let newDigit;
      if(lastDigit < parseInt(this.props.side)-1){
          newDigit = parseInt(lastDigit)+1;
          this.count ++;
      } else {
          newDigit = lastDigit;
      }
      this.totem = firstDigit+''+newDigit;
      if(this.items.includes(this.totem)){
        let i = this.items.indexOf(this.totem);
        if (i !== -1) {
          this.items.splice(i, 1);
          if(this.items.length === 0) {
            this.props.gameOver(this.count); 
          }
        }
      }
      this.forceUpdate();
    }
  }
  setTotem = (size) => {
    this.totem = parseInt(size/2)+''+parseInt(size/2);
  }
  componentDidMount(){
    document.addEventListener("keydown", this.handleClick, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleClick, false);
  }
  renderSquare = (i, key, middle, spots) => {
    return (
      <span key={i} className={`square ${i===middle ? 'bg-white' : 'bg-red'} ${spots.includes(i) ? 'bg-black' : 'bg-white'}` }>
      </span>
    );
  }
  render() {
    let rowCount = parseInt(this.props.side), colCount = parseInt(this.props.side);
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
