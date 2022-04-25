import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ cryptoHistory }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < cryptoHistory?.prices?.length; i += 1) {
    coinTimestamp.push(
      new Date(cryptoHistory?.prices[i][0]).toLocaleDateString() +
        ' ' +
        new Date(cryptoHistory?.prices[i][0]).toLocaleTimeString()
    );
    coinPrice.push(cryptoHistory?.prices[i][1]);
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };


  return (
    <>
      <Line data={data} />
    </>
  );
};

export default LineChart;
