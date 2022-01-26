import React from 'react';
import styles from './CardTile.module.scss';

const CardTile = ({image, name, description}) => {
  return (
  <div className={styles.card}>
      <img src={image} alt="" />
      <p className={styles.heading}>{name}</p>
      <p>{description}</p>
  </div>)
};

export default CardTile;
