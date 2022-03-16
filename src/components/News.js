import React,{useEffect,useState} from 'react'
import { useGetNewsQuery } from "../apiServices/newsApi"
import { useGetCryptosQuery } from "../apiServices/cryptoApi";

const News = () => {
  const {data:news,isFetching} = useGetNewsQuery()


    console.log(news?.articles)


  
  const {data:cryptos,isFetching:fetchCryptos} = useGetCryptosQuery({page:1,per_page:10});
  console.log(cryptos)

  if (fetchCryptos) return '...Loading'

  if (isFetching) return '...Loading'

  return (
    <div className="content-wrapper">
      <h1>This is the News page</h1>


      <h1>This is the Cryptocurrencies page</h1>

{cryptos.map(coin=><h4>{coin.current_price}</h4>)}
    </div>

    
    
  )
}

export default News