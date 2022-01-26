import React from 'react';
import styles from './Banner.module.scss';
import banner_img from '../../images/Banner-img.png';
import Button from '../Button/Button';

const Banner = () => {
  return (
      <div className={styles.banner}>
        <img src={banner_img} alt="" />
        <div className={styles.banner_text}>
            <div className={styles.circle}></div>
            <div className={styles.text}>
                <h1>Background Image Remove</h1>
                <p>100% automatic and free</p>
            </div>
            <div className={styles.btn}>
              <Button text="View App" buttonStyle="btn-medium"/>
            </div>
      </div>
  </div>);
};

export default Banner;
