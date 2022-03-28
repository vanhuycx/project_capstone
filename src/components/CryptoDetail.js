import { useParams } from 'react-router';
import React from 'react';

const CryptoDetail = () => {
  const coinId = useParams();
  console.log(coinId);

  return <h1>This is the Crypto Detail page</h1>;
};

export default CryptoDetail;
