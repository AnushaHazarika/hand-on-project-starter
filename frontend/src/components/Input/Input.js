import React from 'react';
import styles from './Input.module.scss';

const Input = ({type, text}) => {
  return (
  <div className={styles.formInput}>
      <label htmlFor={type}>{text}</label>
      <input type={type} placeholder="Type here" name={type} id={type}></input>
  </div>)
};

export default Input;
