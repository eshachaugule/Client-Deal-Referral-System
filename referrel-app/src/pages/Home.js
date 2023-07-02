import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Home.css';

function Home(){
return (
    <>

        <div className='hero-container'>
      <video src='videos/video-1.mp4' autoPlay loop muted />
      <h1>START REFERRING!</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={(e) => {
            e.preventDefault();
            window.location.href='/login';
            }}
        >
          LOGIN
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={(e) => {
            e.preventDefault();
            window.location.href='/createaccount';
            }}        >
          SIGNUP <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
    </>
  );
};

export default Home;



