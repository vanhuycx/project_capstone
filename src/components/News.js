import React,{useEffect,useState} from 'react'
import { useGetNewsQuery } from "../apiServices/newsApi"
import { useGetCryptosQuery } from "../apiServices/cryptoApi";

const News = () => {
  const {data:news,isFetching} = useGetNewsQuery()

    console.log(news?.articles)


  if (isFetching) return '...Loading'

  return (
    <div className="content-wrapper">
      <h1>This is the News page</h1>

    </div>

    
    
  )
}

export default News