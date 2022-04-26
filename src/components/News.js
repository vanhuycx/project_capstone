import React, { useEffect, useState } from 'react';
import { useGetNewsQuery } from '../apiServices/newsApi';
import { useGetGoogleNewsQuery } from '../apiServices/googleNewsApi';
import { List, Card, Select, Typography, Carousel, Divider } from 'antd';
import Loader from '../utils/Loader';
import Autocomplete from '../utils/Autocomplete';

const { Meta } = Card;
const { Option } = Select;
const { Title } = Typography;
const blankImage =
  'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const contentStyle = {
  width: '700px',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

const News = ({ simplified }) => {
  const [sortOrder, setSortOrder] = useState('latest');
  const [newsTopic, setNewsTopic] = useState('crypto');

  const { data: news, isFetching: isFreeNewsFetching } = useGetNewsQuery(
    { page_size: simplified ? 10 : 25, topic: newsTopic },
    { pollingInterval: 3600000 }
  );
  const { data: googleNews, isFetching: isGoogleNewsFetching } =
    useGetGoogleNewsQuery(
      { searchTerm: newsTopic },
      { pollingInterval: 3600000 }
    );

  console.log(googleNews);

  const articles = Array.from(
    new Set(news?.articles?.map((article) => article.title))
  )
    .map((title) => news?.articles.find((article) => article.title === title))

    .sort((articleA, articleB) =>
      sortOrder === 'latest'
        ? new Date(articleB.published_date) - new Date(articleA.published_date)
        : new Date(articleA.published_date) - new Date(articleB.published_date)
    );

  if (isFreeNewsFetching && isGoogleNewsFetching) return <Loader />;

  return (
    <>
      <div className='content-wrapper'>
        {!simplified && (
          <>
            <Title level={2}>Useful Articles</Title>

            <Carousel autoplay style={contentStyle}>
              {articles?.map((item) => (
                <a href={item?.link} rel='noreferrer noopener' target='_blank'>
                  <Card
                    className='news-card'
                    hoverable
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
              ))}
            </Carousel>

            <Divider />

            <Autocomplete onPage='News' setNewsTopic={setNewsTopic} />
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

            <Title level={2}>Headlines</Title>
          </>
        )}

        <List
          size='large'
          dataSource={googleNews}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <List.Item.Meta
                // avatar={<Avatar src={item.picture.large} />}
                title={
                  <a
                    href={item?.link}
                    rel='noreferrer noopener'
                    target='_blank'
                  >
                    {item?.title}
                  </a>
                }
                description={item?.source || ''}
              />
              <div>{item?.publish_date}</div>
            </List.Item>
          )}
        />

        {/* <List
          grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
          dataSource={articles}
          renderItem={(item) => (
            <List.Item>
              <a href={item?.link} rel='noreferrer noopener' target='_blank'>
                <Card
                  className='news-card'
                  hoverable
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
        /> */}

        {/* <Carousel autoplay>
          {googleNews?.map((news) => (
            <div>
              <h3 style={contentStyle}>
                <a href={news.link} rel='noreferrer noopener' target='_blank'>
                  {news.title}
                </a>
              </h3>
            </div>
          ))}
        </Carousel> */}
      </div>
    </>
  );
};

export default News;
