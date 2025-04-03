import React from 'react'; 
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero' id='home'> 
      <h1 className='hero-title'>Discover Your Next Favorite Book</h1> 
      <p className='hero-description'>
        Browse our extensive collection of bestsellers, classics, and hidden gems.
        Whether you're looking for fiction, non-fiction, science, or history - we've got you covered.
        Sign up today and start your reading journey with us.
      </p>  
    </div> 
  ); 
}

export default Hero;