import React from 'react'
import { useState,useEffect } from "react"

const Cryptocurrencies = () => {
  // hook

  const [color, setColor] = useState('red')


  return (<>

    <h1>This is the Cryptocurrencies page</h1>


    <h1>Color is: {color}</h1>

    <button onClick={()=>setColor('blue')}>Click to blue color</button>

    <button onClick={()=>setColor('red')}>Click to red color</button>

  
  </>
   

  )
}

export default Cryptocurrencies