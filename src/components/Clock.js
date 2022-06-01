import React, { Component } from 'react';

function FormatedDate(props)
{
  return<h2 style={{color:'#FFF'}} >It is {props.date.toLocaleTimeString()}. </h2>
}

export default class Intro extends Component {
  constructor(props){
    super(props)
    this.state = {date: new Date()};
  }
  
  componentDidMount()
  {
    this.timerId = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  tick()
  {
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(      
      <div>
        <text>
          <FormatedDate date={this.state.date}/>
        </text>
        
      </div>
    )
  }
}