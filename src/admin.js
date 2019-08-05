// 这个是主页
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import Home from './pages/home'

import './style/common.less'
import 'antd/dist/antd.css' //记得要导入antd样式

class Admin extends Component {
  render() {
    return (
      <Row className="conteainer">
        <Col span={3} className="nav-left">
          <NavLeft />
        </Col>
        <Col span={21} className="main">
          <Header />
          <Row className="content">
            <Home/>
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}

export default Admin
