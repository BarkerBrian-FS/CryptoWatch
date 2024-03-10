import React from 'react';
import coinGecko from '../images/coinGecko.png';

const Footer = () => {
  return (
    <div>
        <h1>Powered By</h1>
        <img src={coinGecko} alt='Coin Gecko'></img>
    </div>
  )
};

export default Footer