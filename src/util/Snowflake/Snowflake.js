import React, { Component } from 'react';
import './Snowflake.scss';

class Snowflake extends Component{
  constructor(props) {
   super(props);
   this.state = {
    flakeArr: []
   }
  }

  componentDidMount() {
   const oFlake = [];
   for(let i = 0; i < 99; i++) {
    const num = Math.floor(Math.random() * 19 + 1);
    const oSpan = <i className={'iFlake' + num} key={i}></i>;
    oFlake.push(oSpan);
   } 
   this.setState({
    flakeArr: oFlake
   })
  }
 
  render() {
   const { flakeArr } = this.state;
    return (
     <div className="wrap">
       {flakeArr}
     </div>
    )
  }
}

export default Snowflake;