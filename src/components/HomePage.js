import React from "react";
import {Typography,Card,List,Space,Statistic,Divider} from 'antd'
import {useGetGlobalStatsQuery,useGetTrendingQuery} from '../apiServices/cryptoApi'
import { Link } from "react-router-dom";



const {Title} = Typography

const HomePage = () => {
  const {data:stats} =  useGetGlobalStatsQuery()
  const globalStats = stats?.data

  const {data:trending} = useGetTrendingQuery();
  const trendingCoins = trending?.coins

  return (
    <>
      <div className="marquee-widget">

      <coingecko-coin-price-marquee-widget coin-ids="bitcoin,ethereum,litecoin,ripple,solana,avalanche-2,terra-luna,cardano,polkadot,link" currency="usd" background-color="#ffffff" locale="en"></coingecko-coin-price-marquee-widget>

      </div>
      

      <Title level={2}>
        Global Crypto Stats
      </Title>

      <Space size={20} wrap={true} className="stats-container">

        <Statistic title='Total Market Cap' precision={2} prefix='$' value={globalStats?.total_market_cap?.usd || 'No data'}/>

        <Statistic title='Market Cap Percentage 24h Change' precision={2} suffix='%' value={globalStats?.market_cap_change_percentage_24h_usd || 'No data'}/>
          
          <Statistic title='24h Volume' prefix='$' precision={2} value={globalStats?.total_volume?.usd || 'No data'}/>

          <Statistic title='Active Cryptocurrencies' value={globalStats?.active_cryptocurrencies || 'No data'}/>
     

        <Statistic title='Dominance' value={('BTC: ' + globalStats?.market_cap_percentage?.btc.toLocaleString("en-US",{maximumFractionDigits: 2}) + '% - ETH: ' + globalStats?.market_cap_percentage?.eth.toLocaleString("en-US",{maximumFractionDigits: 2}) + '%') || 'No data'}/>

       

 
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
