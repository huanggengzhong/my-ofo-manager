// 这个是主页
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header'

class Admin extends Component {
  render() {
    return (
      <Row>
        <Col span={3}>left</Col>
        <Col span={21}>
         <Header>
             头部
         </Header>
         <Row>
             内容
         </Row>
        </Col>
      </Row>
    )
  }
}

export default Admin
