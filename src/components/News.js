import React,{useEffect,useState} from 'react'
import { useGetNewsQuery } from "../apiServices/newsApi"
import {Link} from 'react-router-dom'
import {List,Card,Space} from 'antd'

const  {Meta} = Card

const News = () => {
  const {data:news,isFetching} = useGetNewsQuery()

  const newsArticles = news?.articles
    console.log(newsArticles)


  if (isFetching) return '...Loading'

  return (
    <div className="content-wrapper">


    <Space>
      <List grid={{gutter:16,xs:2,sm:2,md:4,lg:5,xl:7,xxl:7}}
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

                    {/* <Meta title={item?.summary || ''} /> */}

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