import React from 'react';
import { hashHistory } from 'react-router';

import { Table, Input, Popconfirm, Button, Form, Icon, Modal } from 'antd';

export default class OrderFormQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data : [],
      dataA : []
    }
     //用户表头
    this.column = [{
        title: '用户名',
        dataIndex: 'username',
    },{
        title: '邮箱',
        dataIndex: 'email',
    },{
        title: '电话',
        dataIndex: 'phoneNum',
    },{
        title: '地址',
        dataIndex: 'address',
    },{
        title: '操作',
        render:()=>{
          return(
              <div>
                <Button onClick={() =>this.details() } type="primary">添加订单</Button>
              </div>
          )
        }
    }]
    //该用户订单详情
    this.columns = [{
      title: '型号',
      dataIndex: 'commName',
    }, {
      title: '数量',
      dataIndex: 'quantity',
    }, {
      title: '单价',
      dataIndex: 'price',
    }, {
      title: '总价',
      render: (index)=>{
        return(
          <div>
             { index.quantity*index.price } 
          </div>
        )
      },
    }, {
      title: '操作',
      render: (index) => {
        return(

            <div>
              <Button onClick={() => this.edit(index)} type="primary">修改</Button>
              <Popconfirm title="确定删除该订单?" onConfirm={()=>this.order(index)}>
                <Button style={{ marginLeft:3 }} type="primary" >删除</Button>
              </Popconfirm>
            </div>
          )
      },
    }];
  }



 //进入页面就是启用函数
  componentWillMount(){
    this.getOrderForm()
    this.getUserOrder()
  }
  //获取该用户地址信息数据
  getOrderForm(){
    fetch("/users/getId",{
      method: "POST",
      headers: {        
          "Content-Type": "application/x-www-form-urlencoded"
      },
      body: '_id=' + this.props.params._id,
      credentials: 'include'  
      }).then(function(response){
        return response.json();
      }).then((data)=>{
        this.setState({
          data:data
        })
    })
  }
  //获取该用户订单信息
  getUserOrder(){
     fetch("/users/getUserOrder",{
      method: "POST",
      headers: {        
          "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `_id=${this.props.params._id}`,
      credentials: 'include'  
      }).then(function(response){
        return response.json();
      }).then((data)=>{
        this.setState({
          dataA:data

        })
    })
  }
  //跳转添加订单页面
  details(){
    const commId = this.props.params._id
    hashHistory.push(`/nav/orderForm/addOrderForm/${commId}`)
  }
  //删除当前订单
  order(index){
    fetch('/users/dlOrder',{
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body:`_id=${index._id}`,
    }).then(function(response){
      return response.json();
    }).then((data)=>{
      this.setState({
        dataA:data

      })
      Modal.success({
        title: '删除成功',
      });
    })
  }
  //修改当前订单
  edit(index){
    hashHistory.push(`/nav/orderForm/modifyOrder/${index._id}`)
  }

  render(){
    const columns = this.columns;
    const column = this.column;
    return(
        <div>
          <Table bordered columns={ column } dataSource={ this.state.data } />
          <Table bordered columns={ columns } dataSource={ this.state.dataA } />

        </div>
    )
  }
}