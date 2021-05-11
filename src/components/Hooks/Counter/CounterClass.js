import React, { Component } from 'react'

export default class CounterClass extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    }
  }

  add(){
    this.setState({ value: this.state.value + 1});
  }

  substract(){
    this.setState({ value: this.state.value - 1 });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.substract()}>Substract</button>
        {this.state.value}
        <button onClick={() => this.add()}>Add</button>
      </div>
    )
  }
}