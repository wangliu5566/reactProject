import React from 'react';
import { Input,Button,Table,Modal} from 'antd';
import {hashHistory} from "react-router";

export default class SearchCommodity extends React.Component {
    constructor(props) {
        super(props);
				this.state = {
			data:[]
		}
    }

    toCommDetail(index){
    	hashHistory.push(`nav/commodity/commDetail/${index._id}`)
    }

    search(){

        if(this.refs.searchInfo.refs.input.value == ''){
            Modal.warning({
			    title: '请输入查询条件',
			  });
        }else{
        	fetch("/commodity/searchCommodity", {
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
				  title: '商品型号',
				  dataIndex: 'commName',
				},{
				  title: '商品类型',
				  dataIndex: 'type',
				  render:(text)=>{
				  	 switch(text) {
				  	 	case '1':
				  	 		return '商务系列'
				  	 	case '2':
				  	 		return '休闲系列'
				  	 	case '3':
				  	 		return '运动系列'
				  	 	case '4':
				  	 		return '纤巧系列'
				  	 	case '5':
				  	 		return '雅韵系列'
				  	 	case '6':
				  	 		return '香水系列'

				  	 }
				  }
				}, {
				  title: '商品价格',
				  dataIndex: 'price',
				}, {
				  title: '查看详情',

				  render:(record,index)=> {
		              return (
		                     <Button style={{marginRight:3}} size="small" onClick={()=>this.toCommDetail(index)}>查看详情</Button>
		              )
				  }
				},{
				  title: '查看图片',

				  render:(record,index)=> {
		              return (
			          	     <Button type="primary" htmlType="button" size="small" onClick={()=>this.showPics(index)}>查看图片</Button>
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
			<div>
 				 <Input placeholder="请输入查询条件(商品型号、商品类型、商品价格)" ref='searchInfo' style={{width:50+'%',marginLeft:20+'%',marginTop:60+'px'}}/>
 				 <Button type="ghost" icon="search" onClick={()=>this.search()}>查询</Button>
				<Table columns={columns} dataSource={this.state.data} pagination={pagination}
					style={{marginTop:30+'px'}}
				 />
			</div>
        )
    }
}
