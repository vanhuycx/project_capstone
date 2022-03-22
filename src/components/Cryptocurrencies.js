import React, { useState, useEffect } from 'react';
import { useGetCryptosQuery } from '../apiServices/cryptoApi';
import { Table } from 'antd';

const Cryptocurrencies = () => {
  const { data: cryptos, isFetching: fetchCryptos } = useGetCryptosQuery({
    page: 1,
    per_page: 100,
  });
  console.log(cryptos);

  if (fetchCryptos) return '...Loading';

  const columns = [
    {
      title: 'Coin',
      dataIndex: 'name',
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: 'Price',
      dataIndex: 'current_price',
      sorter: (a, b) => a.current_price - b.current_price,
      render: (value) => {
        return <span>$ {value.toLocaleString('en-US')}</span>;
      },
    },
    {
      title: '1h Price Change',
      dataIndex: 'price_change_24h',
      sorter: (a, b) => a.price_change_24h - b.price_change_24h,
      render: (value) => {
        return <span>$ {value.toLocaleString('en-US')}</span>;
      },
    },
    {
      title: '24h Volume',
      dataIndex: 'total_volume',
      sorter: (a, b) => a.total_volume - b.total_volume,
    },
    {
      title: 'ATL (Past 24h)',
      dataIndex: 'low_24h',
      sorter: (a, b) => a.low_24h - b.low_24h,
      render: (value) => {
        return <span>$ {value.toLocaleString('en-US')}</span>;
      },
    },
    {
      title: 'ATH (Past 24h)',
      dataIndex: 'high_24h',
      sorter: (a, b) => a.high_24h - b.high_24h,
      render: (value) => {
        return <span>$ {value.toLocaleString('en-US')}</span>;
      },
    },
    {
      title: 'Mkt Cap',
      dataIndex: 'market_cap',
      sorter: (a, b) => a.market_cap - b.market_cap,
      render: (value) => {
        return <span>$ {value.toLocaleString('en-US')}</span>;
      },
    },
  ];

  return (
    <>
      <div className='content-wrapper'>
        <Table dataSource={cryptos} columns={columns}>
          {' '}
        </Table>
      </div>
    </>
  );
};

export default Cryptocurrencies;
