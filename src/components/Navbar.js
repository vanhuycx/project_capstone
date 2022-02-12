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
            <p>CoinChain</p>
            </div>         
        </div>
      
        <div className="navbar-container">
          
      
          <div><HomeOutlined/> <a href="/">Home</a></div>
          <div><MoneyCollectOutlined/> <a href="/">Cryptocurrencies</a></div>
          <div><BulbOutlined/> <a href="/">Exchanges</a></div>
          <div><FundOutlined/> <a href="/">News</a></div>
            

        </div>
      </>
    )
};

export default Navbar
