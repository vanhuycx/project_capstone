import React from "react";
import {useGetGlobalStatsQuery} from '../apiServices/cryptoApi'

const Main = () => {
  const {data,isFetching} = useGetGlobalStatsQuery();

  console.log(data)

  if (isFetching) return '....Loading'
  

  return (
    <>
    <div>
      Market cap: {data?.data?.total_market_cap?.usd ? data?.data.total_market_cap?.usd : 'No data' }
    </div>

    </>

  )
      

};

export default Main;
