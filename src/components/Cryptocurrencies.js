import React, { useState,useEffect } from 'react'
import { useGetCryptosQuery } from "../apiServices/cryptoApi";

const Cryptocurrencies = () => {

  const {data:cryptos,isFetching:fetchCryptos} = useGetCryptosQuery({page:1,per_page:10});
  console.log(cryptos)

  if (fetchCryptos) return '...Loading'


  return (<>

    <h1>This is the Cryptocurrencies page</h1>

  
  </>
   

  )
}

export default Cryptocurrencies