import React from 'react'
import { useGetNewsQuery } from "../apiServices/newsApi"
const News = () => {

  const {data:newsData} = useGetNewsQuery()
  console.log(newsData)
  return (
    <h1>This is the News page</h1>
  )
}

export default News