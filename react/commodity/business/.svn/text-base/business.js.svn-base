import React from 'react';
import { Table , Button, Popconfirm} from 'antd';
import {hashHistory} from "react-router";
import {connect}  from 'react-redux';

import {getCommodity,toCommDetail,showPics} from '../../commodityAction.js'

import './business.css';




class Business extends React.Component{
	constructor(props){
		super(props)
	}


    componentWillMount(){
    	this.props.dispatch(getCommodity(this.props.params.pageName))
    }


	render(){
		const columns = [{
		  title: '商品型号',
		  dataIndex: 'commName',
		},{
		  title: '商品类型',
		  dataIndex: 'type',
		  render:(text)=>{return '商务系列'}
		}, {
		  title: '商品价格',
		  dataIndex: 'price',
		}, {
		  title: '查看详情',
		  
		  render:(record,index)=> {
              return (
                     <Button style={{marginRight:3}} onClick={()=>this.props.dispatch(toCommDetail(index._id))}>查看详情</Button>  	 
              )
		  }
		},{
		  title: '查看图片',
		  
		  render:(record,index)=> {
              return (
	          	     <Button type="primary" htmlType="button" size="small" onClick={()=>this.props.dispatch(showPics(index._id))}>查看图片</Button>
              )
		  }
		}];


		const pagination = {
		  total: this.props.getCommodityByType.length,
		  showSizeChanger: true,
		  onShowSizeChange: (current, pageSize) => {
		   console.log(current, pageSize)
		  },
		  onChange: (current) => {
		    console.log('Current: ', current);

		  },
		};

		return(
             <Table columns={columns} dataSource={this.props.getCommodityByType}/>
		)
	}
}

function select(state){
	return {
		getCommodityByType:state.getCommodityByType
	}
}

export default connect(select)(Business)
