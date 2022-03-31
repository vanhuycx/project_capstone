import React, { useState, useEffect } from 'react';
import { useGetFearGreedIndexQuery } from '../apiServices/fearGreedApi';
import { Line } from '@ant-design/plots';

const FearGreedIndex = () => {
  const [limit, setLimit] = useState(10);

  const { data: fearGreedIndex, isSuccess } = useGetFearGreedIndexQuery({
    limit: limit,
  });

  const fearGreedData = [];
  fearGreedIndex?.data.map((data) =>
    fearGreedData.push({
      timestamp: new Date(data?.timestamp * 1000).toLocaleDateString(),
      value: parseInt(data?.value),
    })
  );

  console.log(fearGreedData);

  const config = {
    // data,
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
  return (
    <>
      <img
        style={{ width: 400, height: 400 }}
        src='https://alternative.me/crypto/fear-and-greed-index.png'
        alt='Latest Crypto Fear & Greed Index'
      />

      <h1>Crypto Fear & Greed Index Over Time</h1>
      {isSuccess && <Line {...config} />}
    </>
  );
};

export default FearGreedIndex;
