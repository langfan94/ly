import React, { Component } from 'react';

import anime from 'animejs'
import styles from './App.module.scss';
import TypeComponent from './util/TypeComponent/TypeComponent';
import Snowflake from './util/Snowflake/Snowflake';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLiu: 'To my sweet girl Liu Yang:',
      startTime: new Date('2018-11-7'),
      longTime: null
    }
  }

  componentDidMount() {
    // const heart = anime({
    //   targets: '#heart .contain',
    //   translateX: 250,
    //   duration: 3000,
    //   scale: (el, i, l) => {
    //     return (l - i) + .45;
    //   }
    // });
    const loveTimeAnime = anime({
      targets: '.' + styles.envelopeLoveTime,
      translateX: '50%',
      duration: 3000,
      scale: (el, i, l) => {
        return (l - i) + .45;
      }
    })
    const self = this;
    let oLongTime = new Date().getTime() - this.state.startTime.getTime();
    this.setState({
      longTime: oLongTime / 1000
    })
    const oTime = setInterval(() => {
      oLongTime = new Date().getTime() - this.state.startTime.getTime();
      self.setState({
        longTime: oLongTime / 1000
      })
      console.log('oLongTime', oLongTime / 1000);
    }, 3000)

    const heartMove = anime({
      targets: '.heart',
      rotate: '1turn',
      duration: 2000,
      direction: 'alternate',
      loop: true
    })
  }

  render() {
    const {toLiu, longTime} = this.state
    return (
      <div className={styles.wrap}>
        {/* <svg className="contain">
           <path d="M50,88.9C25.5,78.2,0.5,54.4,3.8,31.1S41.3,1.8,50,29.9c8.7-28.2,42.8-22.2,46.2,1.2S74.5,78.2,50,88.9z"/>
        </svg> */}
        {/* <div id="element"></div> */}
        {/* <span className={styles.envelopeLoveTime}>Love Time: <em>{longTime + '秒'}</em></span> */}
        <h2 className={styles.envelopeTitle}>{toLiu}</h2>
        <TypeComponent strings={['我美丽可爱的小可爱<br/>圣诞快乐呀~<br/>']}/>
        <Snowflake></Snowflake>
        <svg className="heart" fill='#f7a7b5'>
          <defs>
          <filter id="f1" x="0" y="0" width="200%" height="200%">
            <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
            <feColorMatrix result="matrixOut" in="offOut" type="matrix"
            values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0" />
            <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
          </defs>
          <path d="M50,88.9C25.5,78.2,0.5,54.4,3.8,31.1S41.3,1.8,50,29.9c8.7-28.2,42.8-22.2,46.2,1.2S74.5,78.2,50,88.9z" filter="url(#f1)"/>
        </svg> 
      </div>
    );
  }
}

export default App;
