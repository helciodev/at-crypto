import React, { useState, useEffect } from 'react';
import { useGetCryptosQuery } from '../services/servicesApi';
import millify from 'millify'
import { Link } from 'react-router-dom';
import {Card, Row, Col, Input } from 'antd';

function CryptoCurrencies({ simplified  }) {
  const count = simplified? 10 : 100;
  const {data: cryptoList, isFetching } = useGetCryptosQuery(count);

   const [currencies, setCurrencies] = useState([]);
    const [filtered, setFiltered] = useState('');

    function seFilter(event){
      setFiltered(event.target.value)
    }

    if (!isFetching) console.log(cryptoList);

    useEffect(() => {
      const filteredData = cryptoList.data.coins.filter((coin) => coin.name.toLowerCase().includes(filtered.toLowerCase()));
      setCurrencies(filteredData);
    }, [filtered]) // will be called into action everytime there is a change in filtered;
    
  return (
    <>
    <div className="search-crypto">
      { !simplified && <Input placeholder="search cryptocurrency" onChange={seFilter}/> } 
    </div>
    <Row gutter={[24, 24]} className="crypto-card-container">
      { currencies.length > 2 && currencies.map((currency) => ( 
      <Col xs={24} sm={12} lg={6} key={currency.id} className="crypto-card">
        <Link to={`/crypto/${currency.id}`}>
          <Card 
          title={`${currency.rank}.${currency.name}`}
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