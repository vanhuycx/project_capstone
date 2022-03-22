import React from 'react';
import { useGetExchangesQuery } from '../apiServices/cryptoApi';
import { Table } from 'antd';

const Exchange = () => {
  const { data: exchanges, isFetching: fetchExchanges } = useGetExchangesQuery({
    page: 1,
    per_page: 100,
  });
  console.log(exchanges);

  if (fetchExchanges) return '...Loading';

  const dataSource = [
    {
      key: [0 - 99],
      ID: exchanges.id,
      Name: exchanges.name,
      Trust: exchanges.trust_score,
      Trade_Volume_24h: exchanges.trade_volume_24h_btc,
    },
  ];
  const columns = [
    {
      title: 'Exchange Name',
      dataIndex: 'name',
    },
    {
      title: 'Exchange ID',
      dataIndex: 'id',
    },
    {
      title: 'Trust Score',
      dataIndex: 'trust_score',
    },
    {
      title: 'BTC Traded in Last 24h',
      dataIndex: 'trade_volume_24h_btc',
    },
  ];
  return (
    <>
      <div className='content-wrapper'>
        <h1>This is the Exchange page</h1>
      </div>

      <Table dataSource={exchanges} columns={columns} />
      
    </>
  );
};

export default Exchange;
