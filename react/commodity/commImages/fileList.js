import React from 'react';
import { Table,Button } from 'antd';

export default class FileList extends React.Component{
	constructor(props){
		super(props)
	}
    
    del(index){

    	fetch("/files/removeImages", {
				    method: "post",
				    headers: {
				        "Content-Type": "application/x-www-form-urlencoded"
				    },
				    body:`_id=${index._id}&commId=${index.commId}`,
					credentials: 'include'
				}).then(function(response) {
				    return response.json();
				}).then((data)=>{
					if(data){
                       this.props.getCommImgsByPage({commId:index.commId,imgType:index.imgType})
					}
				});
    }

	render(){
		const pagination = {
		  total: this.props.count,
		  showSizeChanger: true,
		  onShowSizeChange: (current, pageSize) => {
		    console.log('Current: ', current, '; PageSize: ', pageSize);
		    this.props.getCommImgsByPageage({
		    	curPage:current,
		    	eachPage:pageSize,
		    	commId:this.props.commId
		    })
		  },
		  onChange: (current) => {
		    this.props.getCommImgsByPage({
		    	curPage:current,
		    	commId:this.props.commId
		    })
		  },
		};

		const columns = [{
		  title: '图片编号',
		  dataIndex: '_id',
		},{
		  title: '商品编号',
		  dataIndex: 'commId',
		}, {
		  title: '图片类型',
		  dataIndex: 'imgType',
		  render:(text)=>{
		  	switch(text) {
		  		case '0':
		  			return '首页图片' 
		  		case '1':
		  			return '分页轮播图(大)' 
		  		case '2':
		  			return '分页轮播图(小)'
		  		case '3':
		  			return '详情图片'		
		  	}
		  }
		}, {
		  title: '图片预览',
		  dataIndex: 'src',
          render: text => <img style={{width:50}} src={text}/>
		},{
		  title: '操作',
          render: (index) => <Button onClick={()=>this.del(index)}> 删除 </Button>
		}];

		return(
             <Table columns={columns} dataSource={this.props.data} pagination={pagination}/>
		)
	}
}