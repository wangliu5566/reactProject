import React from 'react';
import { hashHistory } from 'react-router';
import { Input, Button } from 'antd';

const Search = Input.Search;

export default class GetOrderForm extends React.Component{
	constructor(props){
		super(props)
		this.state={
			commName:''
		}
	}
	getuser(e){
		this.setState({
			commName : e.target.value
		})
	}
	handleSubmit(){
		fetch("/users/getUserName", {
		    method: "POST",
		    headers: {
		          "Content-Type": "application/x-www-form-urlencoded"
		    },
		    body:`username=${this.state.commName}`,
		    credentials: 'include'
		}).then(function(response) {
		    return response.json();
		}).then((data) => {
			hashHistory.push(`/nav/orderForm/orderFormQuery/${data[0]._id}`)
		});
	}
	render(){
		return(
			<div>
				<Search placeholder="请输入用户名，邮箱查询" onBlur={(e)=>this.getuser(e)} style={{ marginTop:200, width: 300, marginLeft: 140}} size="large" />
				<Button type="primary" icon="search" onClick={(e)=>this.handleSubmit(e)} size="large" >查询</Button>
			</div>
		)
	}
}