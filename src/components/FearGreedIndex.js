import React from 'react';
import { useGetFearGreedIndexQuery } from '../apiServices/fearGreedApi';

const FearGreedIndex = () => {
  const { data: fearGreedIndex } = useGetFearGreedIndexQuery({ limit: 10 });

  console.log(fearGreedIndex);
  return (
    <>
     <img style={{width:400,height:400}} src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" />
    </>
  );
};

export default FearGreedIndex;
