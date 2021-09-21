import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar } from './components';

function App(){
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  )
}

export default App;