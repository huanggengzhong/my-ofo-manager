import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.less'
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() {
    this.setState({
      userName: '河畔一角'
    })
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col className="" span={24}>
            <span className="">欢迎,{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col className="breadcrumb-title" span={4}>
            首页
          </Col>
          <Col className="weather" span={20}>
            <span className="date">2019-08-05</span>
            <span className="weather-detail">晴转多云</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header
