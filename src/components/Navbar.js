import React from "react";
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined,FundOutlined, MenuOutlined} from '@ant-design/icons'
import moon_icon from '../moon_icon.svg'


const Navbar = () => {

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
      
        <div className="navbar-container">     
          <a href="/"><HomeOutlined/> Home</a>
          <a href="/"><MoneyCollectOutlined/> Cryptocurrencies</a>
          <a href="/"><BulbOutlined/> Exchanges</a>
          <a href="/"><FundOutlined/> News</a>
          
        </div>
        <MenuOutlined className="menu-bars"/>
      </>
    )
};

export default Navbar
