import React from 'react';
import {hashHistory} from 'react-router';
import { Table,Button } from 'antd';

export default class GetShoppingCart extends React.Component{
    constructor(props){
        super(props);
        this.state={ 

            data:[]
        }
    }

    componentWillMount(){
      this.getUserAll();
    }

    getUserAll(){
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
      const pagination = {
          total:this.state.data.length,
          showSizeChanger: true,
          onShowSizeChange: (current, pageSize) => {
            console.log('Current: ', current, '; PageSize: ', pageSize);
          },
          onChange: (current) => {
            console.log('Current: ', current);
          },
        };
      const columns = [{
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
      },{
        title: '操作',
        render:(index) => {
          return(
              <Button type="primary" htmlType="button" onClick={() => {
                  hashHistory.push('/nav/shopper/seeShopping/'+index._id)
              }}>查询购物车</Button>
              )
        },
      }];

        return(
            <div>
                <Table bordered columns={columns} dataSource={this.state.data} pagination={pagination} />
            </div>
            )
    }
}