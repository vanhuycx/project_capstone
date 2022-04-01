import React, { useState, useEffect } from 'react';
import { useGetFearGreedIndexQuery } from '../apiServices/fearGreedApi';
import { Line } from '@ant-design/plots';
import { Select } from 'antd';
import Loader from '../utils/Loader';

const FearGreedIndex = () => {
  const [limit, setLimit] = useState('7');

  const {
    data: fearGreedIndex,
    isFetching,
    isSuccess,
  } = useGetFearGreedIndexQuery({
    limit: limit,
  });

  const time = [
    ['7 days', '7'],
    ['14 days', '14'],
    ['30 days', '30'],
    ['90 days', '90'],
    ['180 days', '180'],
    ['1 years', '365'],
    ['3 years', '1095'],
    ['Max', '0'],
  ];

  const fearGreedData = [];
  fearGreedIndex?.data.map((data) =>
    fearGreedData.push({
      timestamp: new Date(data?.timestamp * 1000).toLocaleDateString(),
      value: parseInt(data?.value),
    })
  );

  // console.log(fearGreedData);

  const config = {
    data: fearGreedData.reverse(),
    xField: 'timestamp',
    yField: 'value',
    point: {
      size: 2,
      shape: 'circle',
      style: {
        fill: 'black',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  };

  if (isFetching) return <Loader />;
  return (
    <>
      <div className='content-wrapper'>
        <img
          style={{ width: 400, height: 400 }}
          src='https://alternative.me/crypto/fear-and-greed-index.png'
          alt='Latest Crypto Fear & Greed Index'
        />

        <h1>Crypto Fear & Greed Index Over Time</h1>

        {isSuccess && (
          <>
            <Select
              defaultValue={limit}
              className='select-timeperiod'
              placeholder='Select Time Period'
              onChange={(value) => setLimit(value)}
            >
              {time?.map((day) => (
                <Select.Option key={day[0]} value={day[1]}>
                  {day[0]}
                </Select.Option>
              ))}
            </Select>

            <Line {...config} />
          </>
        )}
      </div>
    </>
  );
};

export default FearGreedIndex;
