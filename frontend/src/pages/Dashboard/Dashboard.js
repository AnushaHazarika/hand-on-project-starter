import React from 'react';
import styles from './Dashboard.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import Banner from '../../components/Banner/Banner';
import CardTile from '../../components/CardTile/CardTile';
// import xx from '../../../public/images';

const Dashboard = () => {
  const Cards=[
    {
      id:1,
      image: 'images/BGRemoveAPI.png'  ,
      name: 'Background Remove',
      description: 'jhakdhiasdhsjah bhasjd hcasjc jdh jhakdhiasdhsjah bhasjd hcasjc jdh'
    },
    {
      id:2,
      image: '../images/HttpsAPI.png',
      name: 'API Name',
      description: 'jhakdhiasdhsjah bhasjd hcasjc jdh '
    },
    {
      id:3,
      image: '../images/StayFocusedApi.png',
      name: 'API Name',
      description: 'jhakdhiasdhsjah bhasjd hcasjc jdh'
    },
    {
      id:4,
      image: '../images/StayFocusedApi.png',
      name: 'API Name',
      description: 'jhakdhiasdhsjah bhasjd hcasjc jdh'
    },
    {
      id:1,
      image: 'images/BGRemoveAPI.png'  ,
      name: 'Background Remove',
      description: 'jhakdhiasdhsjah bhasjd hcasjc jdh'
    },
    {
      id:1,
      image: 'images/BGRemoveAPI.png'  ,
      name: 'Background Remove',
      description: 'jhakdhiasdhsjah bhasjd hcasjc jdh'
    },
    {
      id:1,
      image: 'images/BGRemoveAPI.png'  ,
      name: 'Background Remove',
      description: 'jhakdhiasdhsjah bhasjd hcasjc jdh'
    }
  ]
  return (
  <div className={styles.dashboard}>
      <Navbar logState='Login'/>
      <Banner />
      <h2>All APIs</h2>
      <div className={styles.cards}>
      {Cards.map((card) => {
        return (
        <CardTile key={card.id} image={card.image} name={card.name} description={card.description} />
      ); })}
      </div>
  </div>);
};

export default Dashboard;
