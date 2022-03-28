import React, { useState } from 'react';
import { useGetExchangesQuery } from '../apiServices/cryptoApi';
import { Table, Pagination } from 'antd';
import Loader from '../utils/Loader';

const Exchange = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const { data: exchanges, isFetching: fetchExchanges } = useGetExchangesQuery({
    page: page,
    per_page: perPage,
  });
  console.log(exchanges);

  if (fetchExchanges) return <Loader />;

  // const dataSource = [
  //   {
  //     key: [0 - 99],
  //     ID: exchanges.id,
  //     Name: exchanges.name,
  //     Trust: exchanges.trust_score,
  //     Trade_Volume_24h: exchanges.trade_volume_24h_btc,
  //   },
  // ];

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
      <Table dataSource={exchanges} columns={columns} pagination={false} />

      <Pagination
        onChange={(page, pageSize) => {
          setPage(page);
          setPerPage(pageSize);
        }}
        defaultCurrent={page}
        defaultPageSize={perPage}
        total={100}
      />
    </>
  );
};

export default Exchange;
