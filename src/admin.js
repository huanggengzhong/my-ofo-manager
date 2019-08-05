// 这个是主页
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import  "./style/common.less"

class Admin extends Component {
  render() {
    return (
      <Row className="conteainer">
        <Col span={3} className="nav-left">left</Col>
        <Col span={21} className="main">
         <Header >
             
         </Header>
         <Row className="content">
             内容
         </Row>
         <Footer>
           
         </Footer>
        </Col>
      </Row>
    )
  }
}

export default Admin
