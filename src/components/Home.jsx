import React from 'react';
import millify from 'millify';
import {Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography
function Home() {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}> <Statistic title="total cryptocurrencies" value="5" /></Col>
        <Col span={12}> <Statistic title="total exchanges" value="5" /></Col>
        <Col span={12}> <Statistic title="total market cap" value="5" /></Col>
        <Col span={12}> <Statistic title="total 24h volume" value="5" /></Col>
        <Col span={12}> <Statistic title="total markets" value="5" /></Col>
        <Col span={12}> <Statistic title="total cryptocurrencies" value="5" /></Col>
      </Row>

    </>
  )
}

export default Home;