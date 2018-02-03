import React from 'react';

import {hashHistory} from 'react-router';
import { Table,Button,Popconfirm } from 'antd';


class SeeShopping extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            userId:this.props.params._id,
            dataOne:[]
        }
    }

   componentWillMount(){
      this.getUserSingle();
      this.getShopper();
    }


    getUserSingle(){
      fetch("/users/getId", {
          method: "POST",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded"
          },
          body:`_id=${this.state.userId}`,
          credentials: 'include'
      }).then(function(response) {
          return response.json();
      }).then((data) => {
          this.setState({
            dataOne:data,
            // data:data[0].shopper
            // data:[{commName:'nanbiao',quantity:20,price:248}]
          });
      });
  }

  getShopper(){
      fetch("/users/getShopper", {
          method: "POST",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded"
          },
          body:`_id=${this.state.userId}`,
          credentials: 'include'
      }).then(function(response) {
          return response.json();
      }).then((data) => {
         // console.log(data)
          this.setState({
            data:data
            // data:[{commName:'nanbiao',quantity:20,price:248}]
          });
      });
  }

    del(index){
      
      fetch("/users/removeShopper", {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:`_id=${index._id}`,
          credentials: 'include'
        }).then(function(response) {
            return response.json();
        }).then((data)=>{
          
          if(data){
            this.getShopper()
          }
        })    
      }
        


    render(){

      const columnsOne = [{
        title: '用户编号',
        dataIndex: '_id',
      }, {
        title: '用户名',
        dataIndex: 'username',
      }, {
        title: '联系电话',
        dataIndex: 'phoneNum',
      }, {
        title: '联系地址',
        dataIndex: 'address',
      }];
  
      const pagination = {
          total:this.state.data.length,
          showSizeChanger: false,
          onShowSizeChange: (current, pageSize) => {
            console.log('Current: ', current, '; PageSize: ', pageSize);
          },
          onChange: (current) => {
            console.log('Current: ', current);
          },
        };

      const columnsTwo = [{
          title: '商品型号',
          dataIndex: 'commName',
        }, {  
          title: '商品数量',
          dataIndex: 'quantity',
        }, {
          title: '商品价格',
          dataIndex: 'price',
        },{
          title: '操作',
          render:(index) => {
            return(
                <div>
                    <Popconfirm title="该操作会删除该购物车所有信息,确定删除？" okText="确定" 
                      cancelText="取消" onConfirm={()=>this.del(index)}>
                         <Button type="primary" style={{marginRight:3}}  htmlType="button">删除</Button>
                    </Popconfirm>
                   
                    <Button style={{marginRight:3}} onClick={() => {
                      hashHistory.push('/nav/shopper/addShoppingCart/'+this.state.userId)
                    }} type="primary" htmlType="button">添加</Button>

                    <Button style={{marginRight:3}} onClick={() => {
                      hashHistory.push('/nav/shopper/upDateShoppingCart/'+index._id)
                    }} type="primary" htmlType="button">修改</Button>
                </div>
                )
          },
        }];
        return(
            <div>
                <Table bordered columns={columnsOne} dataSource={this.state.dataOne}/>
                <Table bordered columns={columnsTwo} dataSource={this.state.data} pagination={pagination}/>      
            </div>
            )
    }
}
export default SeeShopping;