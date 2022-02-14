import React,{useEffect,useState} from "react";
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined,FundOutlined, MenuOutlined} from '@ant-design/icons'
import { Button } from "antd";
import moon_icon from '../moon_icon.svg'


const Navbar = () => {

  // const [activeMenu, setActiveMenu] = useState(true);
  // const [screenSize, setScreenSize] = useState(null)

  // useEffect(() => {
  //   const handleResize = () => setScreenSize(window.innerWidth);

  //   window.addEventListener('resize',handleResize);

  //   handleResize();

  //   return () => window.removeEventListener('resize',handleResize)
  // }, [])

  // useEffect(() => {
    
  //     if (screenSize<700) {
  //         setActiveMenu(false)
  //     } else {
  //         setActiveMenu(true)
  //     }
  // }, [screenSize])
  

  return (
      <>
        <div className="header-container">
            <div>
              <img className="header-logo" src={moon_icon} alt="" />
            </div>
            <div className="header-name">
              CoinChain
            </div>
                     
        </div>   

        {/* {activeMenu && ( */}
          <div className="navbar-container">     
            <a href="/"><HomeOutlined/> Home</a>
            <a href="/"><MoneyCollectOutlined/> Cryptocurrencies</a>
            <a href="/"><BulbOutlined/> Exchanges</a>
            <a href="/"><FundOutlined/> News</a>         
          </div>
        {/* )}    */}
      
        

        {/* <Button className="menu-bars" onClick={()=>setActiveMenu(!activeMenu)}>

          <MenuOutlined />
        </Button>
         */}
       
      </>
    )
};

export default Navbar
