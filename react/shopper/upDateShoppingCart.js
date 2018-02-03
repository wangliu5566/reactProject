import React from "react";
import {hashHistory} from 'react-router';

import {Form , Input , Button, Modal , Select ,Menu, Dropdown, Icon, message,Popconfirm  } from 'antd';
const FormItem = Form.Item;

var saveData={};
class UpDateShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            commName:'',
            quantity:'',
            price:'',
            commPicUpload:true
        }
    }

    componentWillMount(){
      this.getShopperSingle();
    }
    getShopperSingle(){
      fetch("/users/getShopperSingle", {
          method: "POST",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded"
          },
          body:`_id=${this.props.params._id}`,
          credentials: 'include'
      }).then(function(response) {
          return response.json();
      }).then((data) => {
          this.setState(Object.assign({},this.state,data[0]))
          saveData=this.state
      });
  }

    setCommName(e){
        this.setState({
            commName:e.target.value,
        })
    }

    setQuantity(e){
        this.setState({
            quantity:e.target.value,
        })
    }

    setPrice(e){
        this.setState({
            price:e.target.value,
        })
    }

    update(){
        this.setState({
            commPicUpload:false
        })
    }

    handleSubmit() {

    // console.log(this.state)
        fetch("/users/updateShopperSingle", {
          method: "POST",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded"
          },
          body:`userShopping=${JSON.stringify(this.state)}`,
          credentials: 'include'
      }).then(function(response) {
          return response.json();
      }).then((data) => {
          if(data){
            message.success('修改成功!');
            this.getShopperSingle();
            this.setState({
                commPicUpload:true
            })
          }
      });
  }

  handleCancle(){
    this.setState(saveData)
  }
  
    render() {
            const { getFieldDecorator } = this.props.form;
            const formItemLayout = {
              labelCol: { span: 6 },
              wrapperCol: { span: 14 },
            };
            const tailFormItemLayout = {
              wrapperCol: {
                span: 14,
                offset: 6,
              },
            }
        return (
            <div>
                <h3>修改购物车>></h3>
                <Form horizontal>
                    <FormItem
                      {...formItemLayout}
                      label="商品型号"
                      hasFeedback
                    >
                      {getFieldDecorator('commName', {
                        rules: [{
                            required: true, message: '请输入商品型号',
                        }],
                      })(

                        <Input style={{width:50+'%'}} placeholder={this.state.commName} disabled={this.state.commPicUpload} onChange={(e) =>this.setCommName(e)}/>
                      )}
                    </FormItem>
                    <FormItem
                      {...formItemLayout}
                      label="商品数量"
                      hasFeedback
                    >
                      {getFieldDecorator('quantity', {
                        rules: [{
                          required: true, message: '请输入商品数量',
                        }],
                      })(
                        <Input style={{width:50+'%'}} placeholder={this.state.quantity} disabled={this.state.commPicUpload} onChange={(e) => this.setQuantity(e)} />
                      )}
                    </FormItem>
                    <FormItem
                      {...formItemLayout}
                      label="商品价格"
                      hasFeedback
                    >
                      {getFieldDecorator('price', {
                        rules: [{
                          required: true, message: '请输入商品价格',
                        }],
                      })(
                        <Input style={{width:50+'%'}} placeholder={this.state.price} disabled={this.state.commPicUpload} onChange={(e) => this.setPrice(e)} />
                      )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button style={{marginRight:20}} onClick={()=>this.update()}>修改商品</Button>

                        <Popconfirm title="确认修改该购物车信息？" onConfirm={()=>this.handleSubmit()} onCancel={()=>this.handleCancle()} okText="确定" cancelText="取消">
                                <Button type="primary" htmlType="button" size="large" disabled={this.state.commPicUpload}>保存</Button>  
                              </Popconfirm>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default Form.create()(UpDateShoppingCart);