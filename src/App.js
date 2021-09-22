import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import './App.css';
import { Navbar, Exchanges, Cryptocurrencies, CryptoDetails, News, Home } from './components';
const date = new Date();

   function  App() {
     return (
        <div className="app">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="main">
            <Layout>
              <div className="routes">
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/exchanges">
                    <Exchanges />
                  </Route>
                  <Route exact path="/cryptocurrencies">
                    <Cryptocurrencies />
                  </Route>
                  <Route exact path="/crypto/:coinId">
                    <CryptoDetails />
                  </Route>
                  <Route exact path="/news">
                    <News />
                  </Route>
                </Switch>
              </div>
            </Layout>
            <div className="footer">
              <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © {date.getFullYear()}
                <Link to="/">
                  atCrypto Inc.
                </Link> <br />
                All Rights Reserved.
              </Typography.Title>
              <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
              </Space>
            </div>
          </div>
      </div>
     )
   } 
 

export default App;