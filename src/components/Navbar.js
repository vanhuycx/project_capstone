import React,{useState,useEffect} from "react";
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined,FundOutlined, MenuOutlined} from '@ant-design/icons'
import { Button } from "antd";
import moon_icon from '../moon_icon.svg'
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true)
  const bigScreen = useMediaQuery('(min-width:750px)')

  useEffect(() => {
    if (bigScreen) {
      setActiveMenu(true)
    } else {
      setActiveMenu(false)
    }
  }, [bigScreen])
  
  
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

          {activeMenu&&

          <div className="navbar-container">     
            <Link to='/'><HomeOutlined/> Home</Link>
            <Link to='/cryptocurrencies'><MoneyCollectOutlined/> Cryptocurrencies</Link>
            <Link to='/exchanges'><BulbOutlined/> Exchanges</Link>
            <Link to='/news'><FundOutlined/> News</Link>
          </div>
          }        
        <div className="menu-bars">  
            <Button onClick={()=>setActiveMenu(!activeMenu)}>
              <MenuOutlined/>
            </Button>    
        </div>
      </>
    )
};

export default Navbar
