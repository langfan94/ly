import React, { Component } from 'react';
import Typed from 'typed.js';
import styles from './TypeComponent.module.scss';


class typeComponent extends Component{

 componentDidMount() {
  const { strings } = this.props;
  const options = {
   strings,
   typeSpeed: 50,
   loop: true,
   fadeOut: false,
   onComplete: (self) => {
    self.stop();
   }
  }
  this.typed = new Typed(this.el, options);
 }

 componentWillUnmount() {
  this.typed.destroy();
 }

 render() {
  return (
   <span className={styles.typedClass} ref={el => this.el = el}></span>
  )
 }
}

typeComponent.defaultProps = {
 strings: []
}

export default typeComponent;