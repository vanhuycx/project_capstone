import React, { useState } from 'react';
import {
  useGetCryptosQuery,
  useGetGlobalStatsQuery,
} from '../apiServices/cryptoApi';
import { Link } from 'react-router-dom';
import { Table, Pagination } from 'antd';
import Loader from '../utils/Loader';

const Cryptocurrencies = ({ simplified }) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(simplified ? 10 : 50);

  const { data: globalStat } = useGetGlobalStatsQuery();
  const cryptosNumber = globalStat?.data?.active_cryptocurrencies;

  const { data: cryptos, isFetching: fetchCryptos } = useGetCryptosQuery(
    {
      page: page,
      per_page: perPage,
    },
    { pollingInterval: 60000 }
  );

  // console.log(cryptos);

  if (fetchCryptos) return <Loader />;

  const columns = [
    {
      title: 'Coin',
      dataIndex: 'name',
      sorter: (a, b) => a.name - b.name,
      render: (value, record) =>
        (
          <Link to={`/crypto/${record?.id}`}>
            <img className='crypto-image' src={record?.image} alt='' />
            {value}
          </Link>
        ) || '',
      fixed: 'left',
      width: 150,
    },
    {
      title: 'Price ($)',
      dataIndex: 'current_price',
      sorter: (a, b) => a.current_price - b.current_price,
      render: (value) =>
        value?.toLocaleString('en-US', { maximumFractionDigits: 15 }) || '-',
      width: 150,
    },

    {
      title: '1h Price Change ($)',
      dataIndex: 'price_change_24h',
      sorter: (a, b) => a.price_change_24h - b.price_change_24h,
      render: (value) =>
        value?.toLocaleString('en-US', { maximumFractionDigits: 10 }) || '-',
    },
    {
      title: '24h Volume ($)',
      dataIndex: 'total_volume',
      sorter: (a, b) => a.total_volume - b.total_volume,
      render: (value) =>
        value?.toLocaleString('en-US', { maximumFractionDigits: 10 }) || '-',
    },
    {
      title: '24h ATL ($)',
      dataIndex: 'low_24h',
      sorter: (a, b) => a.low_24h - b.low_24h,
      render: (value) =>
        value?.toLocaleString('en-US', { maximumFractionDigits: 10 }) || '-',
    },
    {
      title: '24h ATH ($)',
      dataIndex: 'high_24h',
      sorter: (a, b) => a.high_24h - b.high_24h,
      render: (value) =>
        value?.toLocaleString('en-US', { maximumFractionDigits: 10 }) || '-',
    },
    {
      title: 'Mkt Cap ($)',
      dataIndex: 'market_cap',
      sorter: (a, b) => a.market_cap - b.market_cap,
      render: (value) => value?.toLocaleString('en-US') || '-',
      width: 180,
    },

    {
      title: 'Last 7 days',
      dataIndex: '',
      sorter: (a, b) => '',
      render: (value) => '' || '-',
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
        scroll={{ x: 1200, y: 650 }}
        pagination={false}
      />

      {!simplified && (
        <Pagination
          onChange={(page, pageSize) => {
            setPage(page);
            setPerPage(pageSize);
          }}
          defaultCurrent={page}
          defaultPageSize={perPage}
          total={cryptosNumber}
        />
      )}
    </>
  );
};

export default Cryptocurrencies;
