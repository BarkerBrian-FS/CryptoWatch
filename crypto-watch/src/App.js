import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [coins, setCoins]= useState([]);

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets').then((response) => {
      setCoins(response.data)
      console.log(response.data)
    }).catch((error) => {
        console.log(error)
    })
  },[]);

  return (
    <>

    </>
  );
}

export default App;
