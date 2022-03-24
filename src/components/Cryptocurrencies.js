import React, { useState, useEffect } from 'react';
import {
  useGetCryptosQuery,
  useGetGlobalStatsQuery,
} from '../apiServices/cryptoApi';
import { Table, Pagination } from 'antd';
import Loader from '../utils/Loader';

const Cryptocurrencies = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const { data: globalStat } = useGetGlobalStatsQuery();
  const cryptosNumber = globalStat?.data?.active_cryptocurrencies;

  const { data: cryptos, isFetching: fetchCryptos } = useGetCryptosQuery(
    {
      page: 1,
      per_page: 13356,
    },
    { pollingInterval: 60000 }
  );

  console.log(cryptos);

  if (fetchCryptos) return '...Loading';

  const columns = [
    {
      title: 'Coin',
      dataIndex: 'name',
      sorter: (a, b) => a.name - b.name,
      fixed: 'left',
      width: 150,
    },
    {
      title: 'Price ($)',
      dataIndex: 'current_price',
      sorter: (a, b) => a.current_price - b.current_price,
      render: (value) =>
        value.toLocaleString('en-US', { maximumFractionDigits: 15 }),
      width: 150,
    },

    {
      title: '1h Price Change ($)',
      dataIndex: 'price_change_24h',
      sorter: (a, b) => a.price_change_24h - b.price_change_24h,
      render: (value) => {
        return (
          <span>
            {value.toLocaleString('en-US', { maximumFractionDigits: 10 })}
          </span>
        );
      },
    },
    {
      title: '24h Volume',
      dataIndex: 'total_volume',
      sorter: (a, b) => a.total_volume - b.total_volume,
    },
    {
      title: '24h ATL (USD $)',
      dataIndex: 'low_24h',
      sorter: (a, b) => a.low_24h - b.low_24h,
      render: (value) => {
        return (
          <span>
            {value.toLocaleString('en-US', { maximumFractionDigits: 10 })}
          </span>
        );
      },
    },
    {
      title: '24h ATH (USD $)',
      dataIndex: 'high_24h',
      sorter: (a, b) => a.high_24h - b.high_24h,
      render: (value) => {
        return (
          <span>
            {value.toLocaleString('en-US', { maximumFractionDigits: 10 })}
          </span>
        );
      },
    },
    {
      title: 'Mkt Cap (USD $)',
      dataIndex: 'market_cap',
      sorter: (a, b) => a.market_cap - b.market_cap,
      render: (value) => {
        return <span>{value.toLocaleString('en-US')}</span>;
      },
      width: 180,
      fixed: 'right',
    },
  ];

  return (
    <>
      <Table
        className='crypto-table'
        dataSource={cryptos}
        columns={columns}
        scroll={{ x: 1200, y: 500 }}
        pagination={false}
      />

      <Pagination defaultCurrent={2} total={cryptosNumber} />
    </>
  );
};

export default Cryptocurrencies;
