import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import { Table , Button, Popconfirm } from 'antd';

export default class UserList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data:[]
		}
	}
	delUser(index){

		fetch("/users/delUser", {
				method: "POST",
				headers: {
						"Content-Type": "application/x-www-form-urlencoded"
				},
				body:`_id=${index._id}`
		}).then(function(response) {
				return response.json();
		}).then((data) => {
			this.state.data = data;
			this.setState(data);
		});
	}
	upData(index){
		hashHistory.push(`/nav/users/updata/${index._id}`)

	}

	componentWillMount(){
		fetch("/users/getUser", {
				method: "POST",
				headers: {
						"Content-Type": "application/x-www-form-urlencoded"
				}
		}).then(function(response) {
				return response.json();
		}).then((data) => {

				this.state.data = data;
				this.setState(data);
		});
	}
	render(){

		const columns = [{
		  title: '用户编号',
		  dataIndex: '_id',
		},{
		  title: '用户名称',
		  dataIndex: 'username',
		}, {
		  title: '电话',
		  dataIndex: 'phoneNum',
		}, {
		  title: '地址',
		  dataIndex: 'address',
		}, {
		  title: '邮箱',
		  dataIndex: 'email',
		}, {
		  title: '操作',

		  render:(record,index)=> {
              return (
	              <div>
                <Popconfirm title="确定删除用户?" onConfirm={()=>this.delUser(index)}>
	              <Button style={{marginRight:3}} type="primary" htmlType="button" size="small">删除</Button>
	             </Popconfirm>

	          	  <Button type="primary" htmlType="button" size="small" onClick={()=>this.upData(index)}>更改</Button>
	              </div>
              )
		  }
		}];


		const pagination = {
		  total: this.state.count,
		  showSizeChanger: true,
		  onShowSizeChange: (current, pageSize) => {
		   console.log(current, pageSize)
		  },
		  onChange: (current) => {
		    console.log('Current: ', current);

		  },
		};
		return (
				<Table columns={columns} dataSource={this.state.data} pagination={pagination} />
		)
	}
}
