import React, { Component } from 'react'
import './index.less'
import { Menu } from 'antd'
import MenuConfig from './../../config/menuConfig'

const { SubMenu } = Menu

class NavLeft extends Component {
  state = {}
  componentWillMount() {
    console.log(MenuConfig);
    
    const menuTreeNode = this.renderMenu(MenuConfig)
    console.log(menuTreeNode);
    
    this.setState({
      menuTreeNode
    })
  }
  //菜单渲染
  renderMenu = (data) => {
    return data.map(item => {
      if (item.children) {
        return (
        <SubMenu title={item.title} key={item.key}>
        {this.renderMenu(item.children)}
        {/* 递归遍历到底 */}
        </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>后台管理系统</h1>
        </div>

        
        <Menu theme="dark">
        {this.state.menuTreeNode}

        </Menu>

      </div>
    )
  }
}

export default NavLeft
