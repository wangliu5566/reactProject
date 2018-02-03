import React from 'react';
import { hashHistory } from 'react-router';
import { Table, Button, Menu, Icon, Row, Col  } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



export default class OrderForm extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
            current: 'orderFormAll',
            openKeys: []
        };
    }
    handleClick(key){
     	hashHistory.push(`/nav/orderForm/${key.key}`)
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
		return(
			<div>
		      	<Row>
				    <Col span={6}>
				    	<div className='leftAside'>
					    <Menu onClick={(key)=>this.handleClick(key)}
					        	style={{ width: 240 }}
					        	defaultOpenKeys={['sub1']}
					        	mode="inline"
					      	>
					        <SubMenu title={<span><Icon type="user" /><span>所有用户订单</span></span>}>
					            <Menu.Item key="orderFormAll">所有用户订单</Menu.Item>
					        </SubMenu>
					        <SubMenu title={<span><Icon type="search" /><span>订单查询</span></span>}>
					          	<Menu.Item key="getOrderForm">查询订单</Menu.Item>
					        </SubMenu>
					    </Menu>
					    </div>
				    </Col>
				    <Col span={18}>{ this.props.children }</Col>
			  	</Row>
			</div>
		)
	}
}