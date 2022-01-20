import React from 'react';
import './CardTile.scss';

const CardTile = ({image, name, description}) => {
  return (
  <div className="card">
      <img src={image} alt="" />
      <p className='heading'>{name}</p>
      <p>{description}</p>
  </div>)
};

export default CardTile;
