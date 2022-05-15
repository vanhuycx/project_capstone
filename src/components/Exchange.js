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

  if (fetchExchanges) return <Loader />;

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
      </div>
    </>
  );
};

export default Exchange;
