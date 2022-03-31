import { useParams } from 'react-router';
import React from 'react';
import { useGetSpecificCryptoQuery } from '../apiServices/cryptoApi';
import Loader from '../utils/Loader';

const CryptoDetail = () => {
  const cryptoId = useParams();
  const { data: coin, isFetching } = useGetSpecificCryptoQuery({
    cryptoId: cryptoId?.cryptoId,
  });

  console.log(coin);

  if (isFetching) return <Loader />;
  return (
    <>
      <h1>This is {coin?.name} page</h1>
      <p>Price: {coin?.market_data?.current_price?.usd}</p>
    </>
  );
};

export default CryptoDetail;
