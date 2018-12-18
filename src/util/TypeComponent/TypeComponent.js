import React, { Component } from 'react';
import Typed from 'typed.js';
import styles from './TypeComponent.module.scss';


class TypeComponent extends Component{

 componentDidMount() {
  const { strings } = this.props;
  const options = {
   strings,
   typeSpeed: 100,
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

TypeComponent.defaultProps = {
 strings: []
}

export default TypeComponent;