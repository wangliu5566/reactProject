import React from 'react';
import {Menu, Icon, Row, Col} from 'antd';
import {hashHistory} from 'react-router';
import '../commodity/commodity.css'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '1',
            openKeys: []
        };
    }
    handleClick(e) {

        this.setState({current: e.key});
        hashHistory.push(`/nav/users/${e.key}`)
    }
    onOpenChange(openKeys) {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }
  getAncestorKeys(key) {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  }

    render() {
        return (
          <div>
              <Row>
            <Col span={6}>
                     <div className='leftAside'>

                      <Menu
                            className='leftMenu'
                  mode="inline"
                  openKeys={this.state.openKeys}
                  selectedKeys={[this.state.current]}
                  style={{ width: 240 }}
                  onOpenChange={(openKeys)=>this.onOpenChange(openKeys)}
                  onClick={(e)=>this.handleClick(e)}
                >
                  <SubMenu  key="userInfo" title={<span><Icon type="user" /><span>用户信息</span></span>}>
                    <Menu.Item key="userList">用户列表</Menu.Item>
                  </SubMenu>
                  <SubMenu key="userFind" title={<span><Icon type="search" /><span>用户查询</span></span>}>
                    <Menu.Item key="inquire">查询</Menu.Item>
                  </SubMenu>
                </Menu>
                     </div>
            </Col>
            <Col span={18}>{this.props.children}</Col>
          </Row>
          </div>
        );
    }
}
