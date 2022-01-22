// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Navbar from './components/Navbar/Navbar';
import Input from './components/Input/Input';
import API1 from './images/BGRemoveAPI.png';
import CardTile from './components/CardTile/CardTile';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      {/* <Button text="hgfghd" buttonStyle="btn-medium"/> */}
      {/* <Navbar logState="null"/> */}
      {/* <Navbar logState="Login/Signup" /> */}
      {/* <div className='loginCard'>
        <Input type="email" text="Email Address"/>
        <Input type="password" text="Password"/>
        <Button text="Login" buttonStyle="btn-large"/>
      </div> */}
      {/* <CardTile image={API1} name="Background Remove" description="jhakdhiasdhsjah bhasjd hcasjc jdh"/> */}
      <Banner />
    </div>
  );
}

export default App;
