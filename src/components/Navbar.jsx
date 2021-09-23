import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, CollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

function Navbar() {
  const { Item } = Menu;
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">AtCrypto</Link>
        </ Typography.Title>
        {/* <Button className="menu-control-container"></Button> */}
      </div>    
      <Menu theme="dark">
        <Item key="home" icon={<HomeOutlined />}>
          <Link to="/"> Home</Link>
        </Item>
        <Item key="cryptocurrencies" icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Item>
        <Item key="exchange" icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges"> Exchange</Link>
        </Item>
        <Item key="news" icon={<BulbOutlined />}>
          <Link to="/news"> News</Link>
        </Item>
      </Menu>
    </div>
  )
}

export default Navbar