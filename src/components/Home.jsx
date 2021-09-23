import React from 'react';
import millify from 'millify';
import {Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/servicesApi';

const { Title } = Typography

function Home() {
  const { data, isFetching } = useGetCryptosQuery()
  if(!isFetching) console.log(data.data)
   return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      {isFetching && <iframe title="waiting-animation" src="https://embed.lottiefiles.com/animation/57735"></iframe> }

      {!isFetching &&
        <Row>
        <Col span={12}> <Statistic title="total cryptocurrencies" value={millify(data.data.stats.total)} /></Col>
         <Col span={12}> <Statistic title="total exchanges" value={millify(data.data.stats.totalExchanges)} /></Col>
         <Col span={12}> <Statistic title="total market cap" value={millify(data.data.stats.totalMarketCap)} /></Col>
         <Col span={12}> <Statistic title="total 24h volume" value={millify(data.data.stats.total24hVolume)} /></Col>
         <Col span={12}> <Statistic title="total markets" value={millify(data.data.stats.totalMarkets)} /></Col>
       </Row>
      }
    
    </>
  )
}

export default Home;