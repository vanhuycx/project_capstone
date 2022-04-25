import { useParams } from 'react-router';
import React from 'react';
import { useGetSpecificCryptoQuery } from '../apiServices/cryptoApi';
import Loader from '../utils/Loader';
import { Statistic, Space, Row, Col } from 'antd';

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

          <Col span={12}>
            <Statistic
              title='fully diluted valuation:'
              value={
                coin?.market_data?.fully_diluted_valuation?.usd || 'No data'
              }
              prefix='$'
            />
          </Col>

          {coin?.links?.blockchain_site[0] && (
            <a href={coin?.links?.blockchain_site[0]}>Block Chain Site</a>
          )}

          <Col span={12}>
            <Statistic
              title='fully diluted valuation:'
              value={
                coin?.market_data?.fully_diluted_valuation?.usd || 'No data'
              }
              prefix='$'
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CryptoDetail;
