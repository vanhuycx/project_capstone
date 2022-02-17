import React from "react";
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined,FundOutlined, MenuOutlined} from '@ant-design/icons'
import moon_icon from '../moon_icon.svg'
import { Link } from "react-router-dom";

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
            <Link to='/'><HomeOutlined/> Home</Link>
            <Link to='/cryptocurrencies'><MoneyCollectOutlined/> Cryptocurrencies</Link>
            <Link to='/exchanges'><BulbOutlined/> Exchanges</Link>
            <Link to='/news'><FundOutlined/> News</Link>
          </div>
      
        

       
      </>
    )
};

export default Navbar
