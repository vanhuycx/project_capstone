import React from "react";
import {Card,List} from 'antd'
import {useGetGlobalStatsQuery,useGetTrendingQuery} from '../apiServices/cryptoApi'

const HomePage = () => {
  const {data:globalStats,isFetching} =  useGetGlobalStatsQuery({pollingInterval:300000})
  console.log(globalStats)

  const {data:trending} = useGetTrendingQuery({pollingInterval:36000000});

  console.log(trending)

  if (isFetching) return '...Loading'

  
  // const active_cryptocurrencies = globalStats?.data?.active_cryptocurrencies
  // const total_market_cap = globalStats?.data?.market_cap
  // const total_volume = globalStats?.data?.total_volume?.usd

  return (
    <>
    <h1>This is the Home page</h1>
    
    {/* <div>Market cap: {total_market_cap}</div> */}
    </>

  )
      

};

export default HomePage;
