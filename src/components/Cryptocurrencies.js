import React, { useState } from 'react';
import {
  useGetCryptosQuery,
  useGetGlobalStatsQuery,
} from '../apiServices/cryptoApi';
import { Link } from 'react-router-dom';
import { Table, Pagination } from 'antd';
import Loader from '../utils/Loader';
import Autocomplete from '../utils/Autocomplete';
import { Sparklines, SparklinesLine } from 'react-sparklines';

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
      sorter: (a, b) => {
        const lowerCaseNameA = a.name.toLowerCase();
        const lowerCaseNameB = b.name.toLowerCase();
        if (lowerCaseNameA < lowerCaseNameB) {
          return -1;
        }
        if (lowerCaseNameA > lowerCaseNameB) {
          return 1;
        }
        // names must be equal
        return 0;
      },
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
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      render: (item) => item?.toUpperCase() || 'Null',
      sorter: (a, b) => {
        if (a.symbol < b.symbol) {
          return -1;
        }
        if (a.symbol > b.symbol) {
          return 1;
        }
        // names must be equal
        return 0;
      },
      shouldCellUpdate: (prevRecord, nextRecord) =>
        prevRecord.name !== nextRecord.name,
    },
    {
      title: 'Price',
      dataIndex: 'current_price',
      sorter: (a, b) => a.current_price - b.current_price,
      render: (value) =>
        value?.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 15,
        }) || '-',
      width: 150,
    },

    {
      title: '1h',
      dataIndex: 'price_change_percentage_1h_in_currency',
      key: 'price_change_percentage_1h_in_currency',
      render: (item) =>
        item
          ? item?.toLocaleString('en-US', {
              maximumFractionDigits: 2,
            }) + '%'
          : 'Null',
      sorter: (a, b) =>
        a.price_change_percentage_1h_in_currency -
        b.price_change_percentage_1h_in_currency,
    },

    {
      title: '24h',
      dataIndex: 'price_change_percentage_24h',
      key: 'price_change_percentage_24h',
      render: (item) =>
        item
          ? item?.toLocaleString('en-US', { maximumFractionDigits: 2 }) + '%'
          : 'Null',
      sorter: (a, b) =>
        a.price_change_percentage_24h - b.price_change_percentage_24h,
    },

    {
      title: '7d',
      dataIndex: 'price_change_percentage_7d_in_currency',
      key: 'price_change_percentage_7d_in_currency',
      render: (item) =>
        item
          ? item?.toLocaleString('en-US', { maximumFractionDigits: 2 }) + '%'
          : 'Null',
      sorter: (a, b) =>
        a.price_change_percentage_7d_in_currency -
        b.price_change_percentage_7d_in_currency,
    },

    {
      title: '24h Volume',
      dataIndex: 'total_volume',
      sorter: (a, b) => a.total_volume - b.total_volume,
      render: (value) =>
        value?.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 10,
        }) || '-',
      width: 180,
    },

    {
      title: 'Mkt Cap',
      dataIndex: 'market_cap',
      sorter: (a, b) => a.market_cap - b.market_cap,
      render: (value) =>
        value?.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 10,
        }) || '-',
      width: 180,
    },

    {
      title: 'Last 7 days',
      dataIndex: ['sparkline_in_7d', 'price'],
      render: (item, coins) => (
        <>
          <Sparklines data={item} height={100}>
            <SparklinesLine
              color={
                coins.price_change_percentage_7d_in_currency < 0
                  ? 'red'
                  : 'green'
              }
            />
          </Sparklines>
        </>
      ),
      sorter: (a, b) =>
        a.price_change_percentage_7d_in_currency -
        b.price_change_percentage_7d_in_currency,
      width: 180,
      fixed: 'right',
    },
  ];

  return (
    <>
      <div className='content-wrapper'>
        {!simplified && <Autocomplete onPage={'Cryptocurrencies'} />}

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
            showQuickJumper
            defaultCurrent={page}
            defaultPageSize={perPage}
            total={cryptosNumber}
          />
        )}
      </div>
    </>
  );
};

export default Cryptocurrencies;
