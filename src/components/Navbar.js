import React, { useState, useEffect } from "react";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Button, Space, Dropdown } from "antd";
import moon_icon from "../moon_icon.svg";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const menu = (
  <>
    <div className='navbar-container'>
      <Link to='/'>
        <HomeOutlined /> Home
      </Link>
      <Link to='/cryptocurrencies'>
        <MoneyCollectOutlined /> Cryptocurrencies
      </Link>
      <Link to='/exchanges'>
        <BulbOutlined /> Exchanges
      </Link>
      <Link to='/news'>
        <FundOutlined /> News
      </Link>
    </div>
  </>
);

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const bigScreen = useMediaQuery("(min-width:1150px)");

  useEffect(() => {
    if (bigScreen) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  }, [bigScreen]);

  return (
    <>
      <div className='header-container'>
        <img className='header-logo' src={moon_icon} alt='' />

        <div className='header-name'>Coin Chain</div>
      </div>

      {activeMenu ? (
        menu
      ) : (
        <Dropdown className='menu-bars' overlay={menu}>
          <Button>
            <MenuOutlined />
          </Button>
        </Dropdown>
      )}

      {/* <div className="menu-bars">  
            <Button onClick={()=>setActiveMenu(!activeMenu)}>
              <MenuOutlined/>
            </Button>    
        </div> */}
    </>
  );
};

export default Navbar;
