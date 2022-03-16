import React, { useState,useEffect } from 'react'
import { useGetCryptosQuery } from "../apiServices/cryptoApi";

const Cryptocurrencies = () => {

  const {data:cryptos,isFetching:fetchCryptos} = useGetCryptosQuery({page:1,per_page:10});
  console.log(cryptos)

  if (fetchCryptos) return '...Loading'


  return (<>
  <div className="content-wrapper">
    <h1>This is the Cryptocurrencies page</h1>

      {cryptos.map(coin=><h4>{coin.current_price}</h4>)}
  </div>

   

  
  </>
   

  )
}

export default Cryptocurrencies