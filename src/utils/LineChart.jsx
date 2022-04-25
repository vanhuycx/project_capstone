import React from 'react';
import { Line } from '@ant-design/charts';

const LineChart = ({ coinHistory }) => {
  // const coinPrice = [];
  // const coinTimestamp = [];

  const priceList = [];

  for (let i = 0; i < coinHistory?.prices?.length; i += 1) {
    priceList.push({
      coinTimestamp:
        new Date(coinHistory?.prices[i][0]).toLocaleDateString() +
        ' ' +
        new Date(coinHistory?.prices[i][0]).toLocaleTimeString(),
      coinPrice: coinHistory?.prices[i][1],
    });
    // coinPrice.push(coinHistory?.prices[i][1])
  }

  console.log(priceList);

  const config = {
    priceList,
    padding: 'auto',
    xField: 'coinTimestamp',
    yField: 'coinPrice',
    xAxis: {
      tickCount: 5,
    },
    slider: {
      start: 0.1,
      end: 0.5,
    },
  };

  // const options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // };

  return (
    <>
      <Line {...config} />
    </>
  );
};

export default LineChart;
