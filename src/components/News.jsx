import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetNewsQuery } from '../services/newsApi';
import { useGetCryptosQuery } from '../services/servicesApi';

const { Title, Text} = Typography;
const { Option } = Select;

const demo = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState('cryptocurrency');
  const {data: cryptocurrencies, isFetching: isFetchingCrypto } = useGetCryptosQuery(100);
  const { data, isFetching } = useGetNewsQuery({newsCategory, count: simplified ? 6 : 12 });
  if(isFetching) return 'loading...'
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
          showSearch
          className="select-news"
          placeholder="select a news category"
          optionFilterProp="children"
          onChange={(value)=> setNewsCategory(value)}
          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }
          >
            <Option value="cryptocurrency">cryptocurrency</Option>
            {!isFetchingCrypto && cryptocurrencies?.data?.coins.map((coin) => (
              <Option value={coin.name}>{coin.name}</Option>
            )) }
          </Select>
        </Col>
      )}
     {!isFetching && data.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.name}</Title>
                <img src={news?.image?.thumbnail?.contentUrl || demo} alt="image" className="news-image" />
              </div>
              <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demo} alt="" />
                  <Text className="provider-name">{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News;