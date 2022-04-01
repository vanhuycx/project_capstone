import React, { useEffect, useState } from 'react';
import { useGetNewsQuery } from '../apiServices/newsApi';
import { Link } from 'react-router-dom';
import { List, Card, Space, Select } from 'antd';
const { Meta } = Card;

const { Option } = Select;
const blankImage =
  'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
  const [sortOrder, setSortOrder] = useState('latest');

  const { data: news, isFetching } = useGetNewsQuery(
    { page_size: simplified ? 12 : 25 },
    { pollingInterval: 3600000 }
  );

  const articles = Array.from(
    new Set(news?.articles?.map((article) => article.title))
  )
    .map((title) => news?.articles.find((article) => article.title === title))
    .sort((articleA, articleB) =>
      sortOrder === 'latest'
        ? new Date(articleB.published_date) - new Date(articleA.published_date)
        : new Date(articleA.published_date) - new Date(articleB.published_date)
    );

  if (isFetching) return '...Loading';

  return (
    <>
      <div className='content-wrapper'>
        {!simplified && (
          <div className='sorter'>
            Sort by:{' '}
            <Select
              defaultValue='latest'
              onChange={(value) => {
                setSortOrder(value);
              }}
            >
              <Option value='latest'> Latest to Oldest Article</Option>
              <Option value='oldest'>Oldest to Latest Article</Option>
            </Select>
          </div>
        )}

     
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }}
            dataSource={articles}
            renderItem={(item) => (
              <List.Item>
                <a href={item?.link} rel='noreferrer noopener' target='_blank'>
                  <Card
                    className='news-card'
                    hoverable
                    // style={{ width: 220 }}
                    cover={
                      item?.media ? (
                        <img
                          className='news-image'
                          height={150}
                          src={item?.media}
                          alt=''
                        />
                      ) : (
                        <img
                          className='news-image'
                          height={100}
                          src={blankImage}
                          alt=''
                        />
                      )
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
    
      </div>
    </>
  );
};

export default News;
