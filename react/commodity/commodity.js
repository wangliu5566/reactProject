import React from 'react';
import { Menu, Icon , Row , Col } from 'antd';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';

import {commodityState,
	    onOpenChange,
	    CommodityHandleClick} from '../commodityAction.js'

import './commodity.css'


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class Commodity extends React.Component{
	constructor(props){
		super(props)
	    }

	render(){

		return(
          <div>
              <Row>
			      <Col span={6}>
                     <div className='leftAside'>
                     	
                     	<Menu
                            className='leftMenu'
					        mode="inline"
					        openKeys={this.props.commodityState.openKeys}
					        selectedKeys={[this.props.commodityState.current]}
					        style={{ width: 240 }}

					        onOpenChange={(openKeys)=>this.props.dispatch(onOpenChange(openKeys,this.props.commodityState))}

					        onClick={(e)=>this.props.dispatch(CommodityHandleClick(e))}
					      >

					        <SubMenu  key="mailWatch" title={<span><Icon type="heart" /><span>男表</span></span>}>
					          <Menu.Item key="business">商务系列</Menu.Item>
					          <Menu.Item key="relaxation">休闲系列</Menu.Item>
					          <Menu.Item key="sports">运动系列</Menu.Item>
					        </SubMenu>
					        <SubMenu key="femailWatch" title={<span><Icon type="heart-o" /><span>女表</span></span>}>
					          <Menu.Item key="xianqiao">纤巧系列</Menu.Item>
					          <Menu.Item key="yayun">雅韵系列</Menu.Item>
					          <Menu.Item key="perfume">香水系列</Menu.Item>
					        </SubMenu>
					        <SubMenu key="todayCommodity" title={<span><Icon type="star-o" /><span>今日展示</span></span>}>
					          <Menu.Item key="todayCommodity">今日展示</Menu.Item>
					        </SubMenu>
					        <SubMenu key="operate" title={<span><Icon type="setting" /><span>操作</span></span>}>
					          <Menu.Item key="addCommodity">添加商品</Menu.Item>
					          <Menu.Item key="searchCommodity">搜索商品</Menu.Item>
					        </SubMenu>
					      </Menu>
                     </div>
			      </Col>
			      <Col span={18}>{this.props.children}</Col>
		      </Row>
          </div>
		)
	}
} 

function select(state){
   return state
}


export default connect(select)(Commodity)