import React from 'react';

import {hashHistory} from 'react-router';
import {Menu,Row,Col} from 'antd';

import '../index.css';
// import './shopper.css';


export default class Shopper extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:'getShoppingCart'
        }
    }

  //   componentWillMount(){
  //    hashHistory.push(`/nav/shopper/${this.state.current}`)
  // }

    handleClick(e){
        hashHistory.push(`/nav/shopper/${e.key}`);
        this.setState({
          current:e.key
        });
    }

    render(){
        const formItemLayout = {
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        };
        const tailFormItemLayout = {
          wrapperCol: {
            span: 14,
            offset: 6,
          },
        };
        return (
          <div>
               <Row>
                    <Col span={6} className="shopperCol">
                     <Menu onClick={(e) => this.handleClick(e)}
                        selectedKeys={[this.state.current]}
                        mode="inline"
                      >
                      <Menu.Item key="getShoppingCart">所有用户购物车</Menu.Item>
                      <Menu.Item key="searchShoppingCart">查询购物车</Menu.Item>
                      </Menu>
                    </Col>
                    <Col span={18}>{this.props.children}</Col>
              </Row>   
          </div>
        )
    }
}
