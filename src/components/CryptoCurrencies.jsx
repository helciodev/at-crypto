import React, { useState, useEffect } from 'react';
import { useGetCryptosQuery } from '../services/servicesApi';
import millify from 'millify'
import { Link } from 'react-router-dom';
import {Card, Row, Col, Input } from 'antd';

function CryptoCurrencies() {
  const {data: cryptoList, isFetching } = useGetCryptosQuery();

   const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
      if(!isFetching) setCurrencies(cryptoList.data.coins)
    })
   
    console.log(currencies)
  return (
    <>
    <Row gutters={[32, 32]} className="crypto-card-container">
      { currencies.length > 2 && currencies.map((currency) => ( 
      <Col xs={24} sm={12} lg={6} key={currency.id} className="crypto-card">
        <Link to={`/crypto/${currency.id}`}>
          <Card 
          title={currency.rank + currency.name}
          extra={<img className="crypto-image" src={currency.iconUrl} alt={currency.name}/>}
          hoverable
          >
            <p>Price: {millify(currency.price)}</p>
            <p>Market: {millify(currency.marketCap)}</p>
            <p>Daily exchange: {millify(currency.change)}%</p>
          </Card>
        </Link>
      </Col>
      ))}
    </Row>
    </>
  )
}

export default CryptoCurrencies;