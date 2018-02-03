import React from 'react';
import ReactDOM from 'react-dom';
import { Input,Button,Table,Modal} from 'antd';

export default class Inquire extends React.Component {
    constructor(props) {
        super(props);
				this.state = {
					data:[]
				}
    }
    search(){
        if(this.refs.searchInfo.refs.input.value == ''){
            Modal.warning({
			    title: '请输入查询条件',
			  });
        }else{
        	fetch("/users/searchUser", {
				    method: "post",
				    headers: {
				        "Content-Type": "application/x-www-form-urlencoded"
				    },
				    body:`searchInfo=${this.refs.searchInfo.refs.input.value}`,
					credentials: 'include'
				}).then(function(response) {
				    return response.json();
				}).then((data)=>{
                     if(data.length == 0){
                     	Modal.warning({
						    title: '没有符合条件的商品！',
						  });
                     }else{
                     	this.setState({data:data})
                     }

				});
        }
    }

    render() {
				const columns = [{
				  title: '用户编号',
				  dataIndex: '_id',
				  render: text => <a href="#">{text}</a>,
				}, {
				  title: '用户名',
				  dataIndex: 'username',
				},
				{
				  title: '电话',
				  dataIndex: 'phoneNum',
				},
				{
				  title: '地址',
				  dataIndex: 'address',
				},{
				  title: '邮箱',
				  dataIndex: 'email',
				},{
				  title: '操作',

				}
			];
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
					<div>
          <Input placeholder="请输入用户名或电话" ref='searchInfo'  style={{width:50+'%',marginLeft:20+'%',marginTop:60+'px'}}/>
					<Button type="ghost" icon="search" onClick={()=>this.search()}>查询</Button>
					<Table columns={columns} dataSource={this.state.data} pagination={pagination}
						style={{marginTop:30+'px'}}
						 />
					</div>

        )
    }
}
