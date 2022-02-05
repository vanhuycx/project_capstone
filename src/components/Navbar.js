import React from "react";
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined,FundOutlined, MenuOutlined} from '@ant-design/icons'

const Navbar = () => {

  return (
      <>
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
