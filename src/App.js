import React, { Component } from 'react';

import anime from 'animejs'
// import Typed from 'typed.js';
import styles from './App.module.css';

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
    // const options = {
    //   strings: ["First ^1000 sentence.", "Second sentence."],
    //   typeSpeed: 40,
    //   backSpeed: 20,
    //   loop: true
    // }
    // const typed = new Typed("#element", options);
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
  }
  render() {
    const {toLiu, longTime} = this.state
    return (
      <div className={styles.wrap}>
        {/* <svg className="contain">
           <path d="M50,88.9C25.5,78.2,0.5,54.4,3.8,31.1S41.3,1.8,50,29.9c8.7-28.2,42.8-22.2,46.2,1.2S74.5,78.2,50,88.9z"/>
        </svg> */}
        {/* <div id="element"></div> */}
        <div className={styles.envelope}>
          <h2 className={styles.envelopeTitle}>{toLiu}</h2>
          <span className={styles.envelopeLoveTime}>Love Time <em>{longTime + '秒'}</em></span>
        </div>
      </div>
    );
  }
}

export default App;
