import React from 'react';
import {ReactComponent as Logo} from '../../images/logo.svg';
import Button from '../Button/Button';
import styles from './Navbar.module.scss';
// import styles from './Button.module.scss';

const Navbar = ({logState}) => {
  return (
  <div className={styles.navbar}>
      <Logo />
      {(logState !== 'null')?(
        <Button className={styles.btn} text={logState} buttonStyle="btn-medium"/>
        ):""
      }
  </div>
  );
};

export default Navbar;
