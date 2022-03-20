import React,{useEffect,useState} from 'react'
import { useGetNewsQuery } from "../apiServices/newsApi"
import {Link} from 'react-router-dom'
import {List,Card,Space} from 'antd'

const  {Meta} = Card

const News = () => {
  
  const {data:news,isFetching} = useGetNewsQuery({page_size:25},{pollingInterval:3600000})

  const newsArticles = news?.articles
    console.log(newsArticles)


  if (isFetching) return '...Loading'

  return (
    <div className="content-wrapper">


    <Space>
      <List grid={{gutter:16,xs:2,sm:3,md:3,lg:4,xl:5,xxl:5}}
          dataSource={newsArticles}
          renderItem={item => (
            <List.Item>
              <a href={item?.link} 
                  rel='noreferrer noopener'
                  target="_blank">

                <Card hoverable 
                      style={{width:200}}
                      cover={<img width={70} height={140} src={item?.media} alt=""/> || ''}
                >
                  
                    <h2>{item?.title}</h2>
                    <p>{item?.summary?.slice(0,100) + '...' || 'No description'}</p>
                    
                    
                    

                    <Meta title={item?.authors || ''} description={item?.published_date} />
                          
                </Card>  

                  
              </a>
            </List.Item>
          )}
        />

        </Space> 

    </div>

    
    
  )
}

export default News