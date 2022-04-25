import { useParams } from 'react-router';
import React from 'react';
import { useGetSpecificCryptoQuery } from '../apiServices/cryptoApi';
import Loader from '../utils/Loader';
import { Statistic, Space, Row, Col, Card } from 'antd';

const CryptoDetail = () => {
  const cryptoId = useParams();
  const { data: coin, isFetching } = useGetSpecificCryptoQuery({
    cryptoId: cryptoId?.cryptoId,
  });

  console.log(coin);

  if (isFetching) return <Loader />;
  return (
    <>
      <div className='content-wrapper'>
        {/* className='crypto-image' */}
        <h1>
          <img src={coin?.image?.small} alt='' /> {coin?.name}{' '}
        </h1>
        <Space size={20} wrap={true} className='stats-container'></Space>

        <Row gutter={16}>
          <Col span={12}>
            <Statistic
              title='Price:'
              value={coin?.market_data?.current_price?.usd || 'No data'}
              prefix='$'
            />
          </Col>

          <Col span={12}>
            <Statistic
              title='Market Cap:'
              value={coin?.market_data?.market_cap?.usd || 'No data'}
              prefix='$'
            />
          </Col>

          <Col span={12}>
            <Statistic
              title='Total Supply:'
              value={coin?.market_data?.total_supply || 'No data'}
              precision={2}
            />
          </Col>

          <Col span={12}>
            <Statistic
              title='Max Supply:'
              value={coin?.market_data?.max_supply || 'No data'}
              precision={2}
            />
          </Col>

          <Col span={12}>
            <Statistic
              title='Circulating Supply:'
              value={coin?.market_data?.circulating_supply || 'No data'}
              precision={2}
            />
          </Col>

          <Col span={12}>
            <Statistic
              title='fully diluted valuation:'
              value={
                coin?.market_data?.fully_diluted_valuation?.usd || 'No data'
              }
              prefix='$'
            />
          </Col>

          {/* {coin?.links?.blockchain_site[0] && (
            <a href={coin?.links?.blockchain_site[0]}>Block Chain Site</a>
          )} */}
        </Row>

        <div className='card-stats'>
          <Card
            title={coin?.name + ' Price Statistics'}
            style={{ width: 250, backgroundColor: '#f2f2f2' }}
          >
            <Statistic
              title={coin?.name + ' Price'}
              value={coin?.market_data?.current_price?.usd || 'No data'}
              prefix='$'
              valueStyle={{ fontSize: 18 }}
            />
            <br></br>
            <Statistic
              title='Market Cap'
              value={coin?.market_data?.market_cap?.usd || 'No data'}
              prefix='$'
              valueStyle={{ fontSize: 18 }}
            />
            <br></br>
            <Statistic
              title='Trading Volume'
              value={coin?.market_data?.total_volume?.usd || 'No data'}
              prefix='$'
              valueStyle={{ fontSize: 18 }}
            />
            <br></br>
            <Statistic
              title='24h Low / 24h High'
              value={
                coin?.market_data?.low_24h?.usd +
                ' ' +
                '/' +
                ' ' +
                '$' +
                coin?.market_data?.high_24h?.usd
              }
              prefix='$'
              valueStyle={{ fontSize: 18 }}
            />

            <br></br>

            <Statistic
              title='Market Cap Rank'
              value={coin?.market_cap_rank}
              prefix='#'
              valueStyle={{ fontSize: 18 }}
            />

            <br></br>
            <Statistic
              title='All-Time High'
              value={coin?.market_data?.ath?.usd}
              prefix='$'
              valueStyle={{ fontSize: 18 }}
            />

            <Statistic
              value={coin?.market_data?.ath_change_percentage?.usd}
              precision={1}
              suffix='%'
              valueStyle={{ color: '#cf1322', fontSize: 14 }}
            />

            <Statistic
              value={new Date(
                coin?.market_data?.ath_date?.usd
              )?.toLocaleDateString()}
              valueStyle={{ fontSize: 15 }}
            />

            <br></br>
            <Statistic
              title='All-Time Low'
              value={coin?.market_data?.atl?.usd}
              prefix='$'
              valueStyle={{ fontSize: 18 }}
            />

            <Statistic
              value={coin?.market_data?.atl_change_percentage?.usd}
              precision={1}
              suffix='%'
              valueStyle={{ color: '#3f8600', fontSize: 14 }}
            />

            <Statistic
              value={new Date(
                coin?.market_data?.atl_date?.usd
              )?.toLocaleDateString()}
              valueStyle={{ fontSize: 15 }}
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default CryptoDetail;
