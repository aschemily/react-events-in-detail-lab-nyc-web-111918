// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component{


  clickHandle = (event) =>{
    //console.log(this.props.delay) 1500
    //setTimeout(this.props.onDelayedClick, this.props.delay)
    event.persist()
    setTimeout(()=>{
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render(){
    //console.log(this.props.onDelayedClick)

    return(
      <button onClick={this.clickHandle}>Delay</button>
    )
  }
}

export default DelayedButton
