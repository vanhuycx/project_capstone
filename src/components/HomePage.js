import React, { useState, useEffect } from "react";
import { Typography, Card, List, Space, Statistic, Divider } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import {
  useGetGlobalStatsQuery,
  useGetTrendingQuery,
} from "../apiServices/cryptoApi";
import News from "./News";
import Cryptocurrencies from "./Cryptocurrencies";
import { Link } from "react-router-dom";
import { reactHooksModule } from "@reduxjs/toolkit/dist/query/react";

const { Title } = Typography;

const HomePage = () => {
  const html = '<div id="some_div"></div>';
  const [marketPercentageColor, setMarketPercentageColor] = useState();

  const { data: stats } = useGetGlobalStatsQuery({ pollingInterval: 300000 });
  const globalStats = stats?.data;

  const { data: trending } = useGetTrendingQuery({ pollingInterval: 300000 });
  const trendingCoins = trending?.coins;

  const LastUpdate = new Date(globalStats?.updated_at * 1000);

  useEffect(() => {
    if (globalStats?.market_cap_change_percentage_24h_usd < 0) {
      setMarketPercentageColor("#cf1322");
    } else {
      setMarketPercentageColor("#3f8600");
    }
  }, [globalStats?.market_cap_change_percentage_24h_usd]);

  return (
    <>
      <div className='marquee-widget'>
        <coingecko-coin-price-marquee-widget
          coin-ids='bitcoin,ethereum,binancecoin,terra-luna,solana,cardano
          ,polkadot,avalanche-2,dogecoin,matic-network,cosmos,near,litecoin,
          chainlink,tron'
          currency='usd'
          background-color='#ffffff'
          locale='en'
        ></coingecko-coin-price-marquee-widget>
      </div>

      <div className='content-wrapper'>
        <Title level={2}>Global Crypto Stats</Title>

        <Space size={20} wrap={true} className='stats-container'>
          <Statistic
            title='Total Market Cap'
            precision={2}
            prefix='$'
            value={globalStats?.total_market_cap?.usd || "No data"}
          />

          <Statistic
            title='Market Cap Percentage 24h Change'
            precision={2}
            suffix='%'
            value={
              globalStats?.market_cap_change_percentage_24h_usd || "No data"
            }
            valueStyle={{ color: marketPercentageColor }}
            prefix={
              globalStats?.market_cap_change_percentage_24h_usd < 0 ? (
                <ArrowDownOutlined />
              ) : globalStats?.market_cap_change_percentage_24h_usd === 0 ? (
                ""
              ) : (
                <ArrowUpOutlined />
              )
            }
          />

          <Statistic
            title='24h Volume'
            prefix='$'
            precision={2}
            value={globalStats?.total_volume?.usd || "No data"}
          />

          <Statistic
            title='Active Cryptocurrencies'
            value={globalStats?.active_cryptocurrencies || "No data"}
          />

          <Statistic
            title='Dominance'
            value={
              "BTC: " +
                globalStats?.market_cap_percentage?.btc?.toLocaleString(
                  "en-US",
                  { maximumFractionDigits: 2 }
                ) +
                "% - ETH: " +
                globalStats?.market_cap_percentage?.eth?.toLocaleString(
                  "en-US",
                  { maximumFractionDigits: 2 }
                ) +
                "%" || "No data"
            }
          />

          <Statistic
            title='Last time updated'
            value={
              LastUpdate.toLocaleDateString() +
              " " +
              LastUpdate.toLocaleTimeString()
            }
          />
        </Space>

        <Divider />

        <Title level={2}>Trending Coins</Title>

        <List
          grid={{ gutter: 16, xs: 2, sm: 2, md: 4, lg: 5, xl: 5, xxl: 7 }}
          dataSource={trendingCoins}
          renderItem={(item) => (
            <List.Item>
              <Link to={`/crypto/${item?.item?.id}`}>
                <Card>
                  <Space>
                    {<img src={item?.item?.thumb} alt='' /> || ""}
                    {item?.item?.name}
                  </Space>
                </Card>
              </Link>
            </List.Item>
          )}
        />

        <Divider />

        <Title level={2}>Cryptocurrencies table</Title>

        <Cryptocurrencies />

        <Divider />

        <Title level={2}>Latest News</Title>

        <News />

        <Divider />
      </div>
    </>
  );
};

export default HomePage;
