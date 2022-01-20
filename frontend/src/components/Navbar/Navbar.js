import React from 'react';
import {ReactComponent as Logo} from '../../images/logo.svg';
import Button from '../Button/Button';
import './Navbar.scss';
const Navbar = ({logState}) => {
  return (
  <div className='navbar'>
      <Logo />
      {(logState !== 'null')?(
        <Button text={logState} buttonStyle="btn-medium"/>
        ):""
      }
  </div>
  );
};

export default Navbar;
