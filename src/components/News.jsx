import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetNewsQuery } from '../services/newsApi';
const { Title, Text} = Typography;
const { Option } = Select;

const demo = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

function News({ simplified }) {
  const { data, isFetching } = useGetNewsQuery({newsCategory: 'Cryptocurrencies', count: simplified ? 6 : 12 });
  if(isFetching) return 'loading...'
  console.log(data.value)
  return (
    <Row gutter={[24, 24]}>
     {!isFetching && data.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.name}</Title>
                <img src={news?.image?.thumbnail?.contentUrl || demo} alt="" />
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