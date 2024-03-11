import React from 'react';
import coinGecko from '../images/coinGecko.png';

const Footer = () => {
  return (
    <div className='footer'>
        <h1 className='footTag'>Powered By</h1>
        <img className='footImg' src={coinGecko} alt='Coin Gecko'></img>
    </div>
  )
};

export default Footer