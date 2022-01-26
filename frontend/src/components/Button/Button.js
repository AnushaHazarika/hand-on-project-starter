import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({text, onClick, buttonStyle}) => {
    Button.propTypes={
        text: PropTypes.string,
        onClick: PropTypes.func,
        buttonStyle: PropTypes.string,
    };
  return (
  // <button className={`btn ${buttonStyle} ${text}`} onClick={onClick} type="button"> {text==="null"?"":text} </button>
  // <button className={`btn ${buttonStyle}`} onClick={onClick} type="button"> {text} </button>
  <button className={styles.btn} onClick={onClick} type="button"> {text} </button>


  );
};

export default Button;
