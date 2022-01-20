import React from 'react';
import './Input.scss';

const Input = ({type, text}) => {
  return (
  <div className='formInput'>
      <label htmlFor={type}>{text}</label>
      <input type={type} placeholder="Type here" name={type} id={type}></input>
  </div>)
};

export default Input;
