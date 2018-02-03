import React from 'react';
import ReactDom from 'react-dom';
import {hashHistory} from 'react-router';
import {Menu, Icon } from 'antd'

class Nav extends React.Component{
	constructor(props){
        
		super(props)
		this.state={
			current:'commodity'
		}
	}

	handleClick(key){

    	this.setState({
    		  current:key.key
    	})
    	hashHistory.push(`/nav/${key.key}`)
    }

	render(){
        const NAV_STYLE = {width:25+'%',textAlign:'center',fontSize:15,fontWeight:900}

		return(
			<div>
	          <Menu onClick={(key)=>this.handleClick(key)}
		        selectedKeys={[this.state.current]}
		        mode="horizontal" 
		      >
	               
			        <Menu.Item key="commodity" style={NAV_STYLE}>
			            <Icon type="appstore" />商品管理
			        </Menu.Item>
			        
			        <Menu.Item key="users" style={NAV_STYLE}>
			            <Icon type="user" />用户管理
			        </Menu.Item>

			        <Menu.Item key="orderForm" style={NAV_STYLE}>
			            <Icon type="copy" />订单管理
			        </Menu.Item>
			        
			        <Menu.Item key="shopper" style={NAV_STYLE}>
			            <Icon type="shopping-cart" />购物车管理
			        </Menu.Item>

	          </Menu>
	          <div>{this.props.children}</div>
            </div>
		)
	}
}

export default Nav