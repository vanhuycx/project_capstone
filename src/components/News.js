import React,{useEffect,useState} from 'react'
import { useGetNewsQuery } from "../apiServices/newsApi"


const News = () => {
  const {data:news,isFetching} = useGetNewsQuery()


    console.log(news)

  
   

  
  if (isFetching) return '...Loading'
  return (
    <h1>This is the News page</h1>
  )
}

export default News