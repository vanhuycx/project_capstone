import React, { useEffect, useState } from 'react';
import { useGetNewsQuery } from '../apiServices/newsApi';
import { Link } from 'react-router-dom';
import { List, Card, Space } from 'antd';
const { Meta } = Card;

const blankImage =
  'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = () => {
  const { data: news, isFetching } = useGetNewsQuery(
    { page_size: 25 },
    { pollingInterval: 3600000 }
  );

  const uniqueArticles = Array.from(
    new Set(news?.articles?.map((article) => article.title))
  ).map((title) => news?.articles.find((article) => article.title === title));

  if (isFetching) return '...Loading';

  return (
    <Space>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
        dataSource={uniqueArticles}
        renderItem={(item) => (
          <List.Item>
            <a href={item?.link} rel='noreferrer noopener' target='_blank'>
              <Card
                className='news-card'
                hoverable
                style={{ width:220 }}
                cover={
                  
                 
                  <img className='news-image' height={120} src={item?.media} alt='' /> || ''
                }
              >
                <h3>{item?.title}</h3>
                <p>{item?.summary?.slice(0, 100) + '...' || ''}</p>

                <Meta
                  title={item?.authors || ''}
                  description={item?.published_date}
                />
              </Card>
            </a>
          </List.Item>
        )}
      />
    </Space>
  );
};

export default News;
