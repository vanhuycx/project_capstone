import React from "react";
import {Typography,Card,List,Space,Statistic,Divider} from 'antd'
import {useGetGlobalStatsQuery,useGetTrendingQuery} from '../apiServices/cryptoApi'
import { Link } from "react-router-dom";



const {Title} = Typography

const HomePage = () => {
  const {data:stats,isFetching} =  useGetGlobalStatsQuery()
  const globalStats = stats?.data

  const {data:trending} = useGetTrendingQuery();
  const trendingCoins = trending?.coins

  console.log(globalStats)

  if (isFetching) return '...Loading'

  return (
    <>
      <Title level={2}>
        Global Crypto Stats
      </Title>

      <Space size={25} wrap={true} className="stats-container">

        <Statistic title='Total Market Cap' value={globalStats?.total_market_cap?.usd || 'No data'}/>

        <Statistic title='Total 24h Volume' value={globalStats?.total_volume?.usd || 'No data'}/>

        <Statistic title='Markets' value={globalStats?.markets || 'No data'}/>
 
       
      </Space>
       

      <Divider/>

      <Title level={2}>
        Trending Coins
      </Title>

      <List grid={{gutter:16,xs:2,sm:3,md:4,lg:5,xl:6,xxl:7}}
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

      <Divider/>




    </>

  )
      

};

export default HomePage;
