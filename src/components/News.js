import React,{useEffect,useState} from 'react'
import { useGetNewsQuery } from "../apiServices/newsApi"
import {Link} from 'react-router-dom'
import {List,Card,Space} from 'antd'

const News = () => {
  const {data:news,isFetching} = useGetNewsQuery()

  const newsArticles = news?.articles
    console.log(newsArticles)


  if (isFetching) return '...Loading'

  return (
    <div className="content-wrapper">

      <List grid={{gutter:16,xs:2,sm:2,md:4,lg:5,xl:7,xxl:7}}
          dataSource={newsArticles}
          renderItem={item => (
            <List.Item>
              <a href={item?.link}>
                <Card>
                  <Space>
                  {<img width={70} height={70} src={item?.media} alt="" /> || ''}
                    {item?.title}
                  </Space>           
                </Card>  
              </a>
            </List.Item>
          )}
        />

    </div>

    
    
  )
}

export default News