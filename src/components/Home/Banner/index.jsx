import React from 'react';
import './styles.css';
import bannerImg from './banner.png';
import Logo from '../../common/Logo';
const Banner = ({ handleScrollMenu }) => (
  <header>
    <div className='header-content'>
      <Logo />
      <div className='content-main'>
        <h1>“He is a wise man who invented beer.”  Plato</h1>
         <p>An Awesome Collection of Beers to choose from</p> <br />
        <p>Arrival at your doorstep within 60 Minutes !!</p>
        <button onClick={handleScrollMenu}>
          View Menu <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' />
  </header>
);

export default Banner;
