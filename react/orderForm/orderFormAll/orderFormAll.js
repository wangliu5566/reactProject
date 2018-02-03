import React from 'react';
import { hashHistory } from 'react-router';
import { Table, Button } from 'antd';

export default class OrderFormAll extends React.Component{
	constructor(props){
		super(props)
		this.state={
			data : []
		}
	}
	//进入页面就是启用函数
	componentWillMount(){
		this.getOrderForm()
	}

	//获取所用用户数据
	getOrderForm(){
		fetch("/users/getUser",{
			method: "POST",
			headers: {				
	    		"Content-Type": "application/x-www-form-urlencoded"
			},
			credentials: 'include'	
			}).then(function(response){
				return response.json();
			}).then((data)=>{
				this.setState({data:data})
		})
	}
	//跳转所选中用户数据页面
	details(index){
		hashHistory.push(`/nav/orderForm/orderFormQuery/${index._id}`)
	}

	
	
	render(){
		const columns = [{
		  	title: '用户名',
		  	dataIndex: 'username',
		  	width: '20%',
		}, {
		  	title: '邮箱',
		  	width: '20%',
		  	dataIndex: 'email',
		}, {
		  	title: '电话',
		  	width: '20%',
		  	dataIndex: 'phoneNum',
		}, {
		  	title: '地址',
		  	width: '20%',
		  	dataIndex: 'address',
		}, {
		  	title: '操作',
		  	width: '20%',
		  	render : (index)=>{
		  		return (
		  			<Button type="primary" onClick={ ()=>this.details(index)}>查看订单</Button>
		  		)
		  	}
		}]
		
		const pagination = {
		  	total: this.props.data,
		  	showSizeChanger: true,
		  	onShowSizeChange: (current, pageSize) => {
		    	console.log('Current: ', current, '; PageSize: ', pageSize);
		  	},
		  	onChange: (current) => {
		    	console.log('Current: ', current);
		  	},
		}
		return(
			<div>
				<Table columns={ columns } dataSource={ this.state.data } pagination={ pagination} />
			</div>
		)
	}
}