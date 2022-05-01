import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AutoComplete, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons/lib/icons';
import { useGetAllCryptosCoingeckoQuery } from '../apiServices/cryptoApi';
import newsTopic from './newsTopic';

const Autocomplete = ({ onPage, setNewsTopic }) => {
  const { data: allCryptos } = useGetAllCryptosCoingeckoQuery();

  const [options, setOptions] = useState([]);
  // OnSearch
  const onSearch = (searchText) => {
    const filteredData =
      onPage === 'Cryptocurrencies'
        ? allCryptos?.filter(
            (coin) =>
              coin.name.toLowerCase().startsWith(searchText.toLowerCase()) ||
              coin.symbol.toLowerCase().startsWith(searchText.toLowerCase())
          )
        : onPage === 'News' &&
          newsTopic?.filter(
            (topic) =>
              topic.toLowerCase().startsWith(searchText.toLowerCase()) ||
              topic.toLowerCase().includes(searchText.toLowerCase())
          );  
    setOptions(!searchText ? [] : filteredData);
  };

  // OnSelect
  const navigate = useNavigate();
  const onSelect = (data) => {
    if (onPage === 'News') {
      if (data !== '') {
        setNewsTopic(data);
      }
    } else if (onPage === 'Cryptocurrencies') {
      if (data !== '') {
        navigate(`/crypto/${data}`);
      }
    }
  };

  return (
    <>
      <AutoComplete
        onSelect={onSelect}
        onSearch={onSearch}
        allowClear
        placeholder={
          <>
            <SearchOutlined /> Search...
          </>
        }
        style={{ width: 300 }}
      >
        {options.map((option, index) =>
          option?.id ? (
            <AutoComplete.Option key={option.id} value={option.id}>
              <Input
                type='submit'
                bordered={false}
                value={option.name + ' (' + option.symbol.toUpperCase() + ')'}
              />
            </AutoComplete.Option>
          ) : (
            <AutoComplete.Option key={index} value={option}>
              <Input type='submit' bordered={false} value={option} />
            </AutoComplete.Option>
          )
        )}
      </AutoComplete>
    </>
  );
};

export default Autocomplete;
