import React from 'react';
import { useGetFearGreedIndexQuery } from '../apiServices/fearGreedApi';

const FearGreedIndex = () => {
  const { data: fearGreedIndex } = useGetFearGreedIndexQuery({ limit: 10 });

  console.log(fearGreedIndex);
  return (
    <>
      <div>FearGreedIndex</div>
    </>
  );
};

export default FearGreedIndex;
