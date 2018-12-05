import React, { Component } from 'react';

class Form extends Component{
  constructor(props){
    super(props);
    this.state={
      side: 0,
      errorMessage: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({side: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    if(this.state.side === null){
      this.setState({errorMessage: 'We need a value to set number of sides'});
      return ;
    }
    if(isNaN(this.state.side)){
      this.setState({errorMessage: 'Value not an Number'});
      return ;
    }
    const value = parseFloat(this.state.side);
    if(parseInt(value) !== value){
      this.setState({errorMessage: 'Value not an Integer'});
      return ;
    }
    if(parseInt(value) < 3 || parseInt(value) > 9) {
      this.setState({errorMessage: 'value must be between 3 and 9'});
      return ;
    }
    this.props.onValueChange(this.state.side);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        { this.state.errorMessage ? (<span className="error">{ this.state.errorMessage }</span>) : (<span></span>) }
        <br/>
        <label> Enter Side Length/Height </label><br/>
          <input type="text" value={this.state.value} onChange={this.handleChange}/><br/>
        <input type="submit" value="view game"/>
      </form>
    );
  }
}

export default Form;
