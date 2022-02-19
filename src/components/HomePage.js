import React from "react";
import {Typography,Card,List,Space} from 'antd'
import {useGetGlobalStatsQuery,useGetTrendingQuery} from '../apiServices/cryptoApi'

import { Link } from "react-router-dom";

const HomePage = () => {
  const {data:globalStats,isFetching} =  useGetGlobalStatsQuery({pollingInterval:300000})
  console.log(globalStats)

  const {data:trending} = useGetTrendingQuery({pollingInterval:36000000});

  const trendingCoins = trending?.coins

  console.log(trendingCoins)

  if (isFetching) return '...Loading'

  
  // const active_cryptocurrencies = globalStats?.data?.active_cryptocurrencies
  // const total_market_cap = globalStats?.data?.market_cap
  // const total_volume = globalStats?.data?.total_volume?.usd

  const {Title} = Typography

  return (
    <>
     <Title level={2}>
        Global Crypto Stats
      </Title>

      {/* <div>Market cap: {total_market_cap}</div> */}



      <Title level={2}>
        Trending Coins
      </Title>

      <List grid={{gutter:16,xs:1,sm:2,md:3,lg:4,xl:5,xxl:6}}
        dataSource={trendingCoins}
        renderItem={item => (
          <List.Item>
            <Link to={`/crypto/${item?.item?.id}`}>
              <Card>
                <Space>
                {<img src={item?.item?.thumb} alt="" /> || ''}
                  {item?.item?.name}
                </Space>           
                </Card>  
            </Link>
            
          </List.Item>
        )}
        />




    </>

  )
      

};

export default HomePage;
