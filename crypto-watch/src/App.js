import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Coins from './components/Coins';
import Coin from './routes/Coin';
import Nav from './components/Nav';
import {Route, Routes} from 'react-router-dom';

function App() {

  const [coins, setCoins]= useState([]);

  const url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50'

  useEffect(()=>{
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data)
    }).catch((error) => {
        console.log(error)
    })
  },[]);

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Coins coins={coins} />}/>
        <Route path='/coin' element={<Coin />}>
            <Route path=':coinId' element={<Coin />}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App;
