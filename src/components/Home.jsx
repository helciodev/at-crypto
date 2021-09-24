import React from 'react';
import millify from 'millify';
import {Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/servicesApi';
import CryptoCurrencies from './CryptoCurrencies';
import News from './News';

const { Title } = Typography

function Home() {
  const { data, isFetching } = useGetCryptosQuery(10)
  // if(!isFetching) console.log(data.data)
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
       <div className="home-heading-container">
         <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
         <Title level={3} className="show more"><Link to="/cryptocurrencies">Show more</Link></Title>
        </div>
        <CryptoCurrencies simplified />
       <div className="home-heading-container">
         <Title level={2} className="home-title">Latest cryptoCurrencies News</Title>
         <Title level={3} className="show more"><Link to="/news">Show more</Link></Title>
        </div>
        <News simplified />
    </>
    
  )
}

export default Home;