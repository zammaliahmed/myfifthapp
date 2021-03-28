import React, { Component } from 'react'

export default class Time extends Component {
  state ={
    time : 0 , 
    name : 'Ahmed'
  }

  tickHandler = ()=>{
    this.setState({time : this.state.time + 1})

    return this.state.time
  }

  componentDidMount(){
    var timer = setInterval(this.tickHandler , 100)
    this.setState({time : timer})
  }


  render() {
   
    const displaytime = ()=>{
      if (this.state.time < 60){
        return this.state.time + 'Seconds(s)'
      }
  
      const SS = this.state.time % 60 ;
      const MM = ((this.state.time / 60) % 60).toFixed(0)
      const HH = (this.state.time/(60*60)).toFixed(0)
      return `${HH}H: ${MM}m: ${SS}s` ;
    }
    return (
      <div>
        <p  style={{border:'1px solid red',
        width:'150px',
        marginLeft:'220px',
        position:'relative',
        top:'-300px',
        left:'-150px',
        textAlign:'center',
        padding:'12px',
        backgroundColor:'blue',
        color:'white',
        border:'none'
    
    
    
    }}>
        
        {displaytime()} </p>
      </div>
    )
  }
}