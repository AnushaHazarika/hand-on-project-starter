import React from 'react';
import './Banner.scss';
// import '../../images/'
import banner_img from '../../images/Banner-img.png';
import Button from '../Button/Button';
const Banner = () => {
  return (
      <div className='banner'>
        <img src={banner_img} alt="" />
        <div className='banner-text'>
            <div className='circle'></div>
            <div className='text'>
                <h1>Background Image Remove</h1>
                <p>100% automatic and free</p>
            </div>
            <Button text="View App" buttonStyle="btn-medium"/>
      </div>
  </div>);
};

export default Banner;
