import React from 'react'

const CoinItem = (props) => {
  return (
    <div className='coin-row'>
        <p>{props.coins.mkt_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.coins.image} alt='coinImage'/>
            <p>{props.coins.symbol}</p>
        </div>
    </div>
  )
}

export default CoinItem
