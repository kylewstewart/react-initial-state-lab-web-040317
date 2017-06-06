// Bomb Component Code Goes Here
import React from 'react';
import ImageSlider from './ImageSlider'

export default class Bomb extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      secondsLeft: props.initialCount
    }
  }

  render(){
    return(
      <div>
      {this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`}
      </div>
    )
  }
}
