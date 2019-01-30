// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {


  onReceiveCoordinates = (event) =>{
    //console.log([event.clientX, event.clientY])
    //console.log(this.onReceiveCoordinates([event.clientX, event.clientY]))
    //console.log('working?',this.props.onReceiveCoordinates([event.clientX, event.clientY]))
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
    //console.log(this.props.onReceiveCoordinates.event)
  }

  render(){
    //console.log(this.props) // onReceiveCoordinates function
    //console.log(this.state)
    //console.log(this.onReceiveCoordinates)
    return(
      <button onClick={this.onReceiveCoordinates}> Button </button>
    )
  }
}

export default CoordinatesButton
