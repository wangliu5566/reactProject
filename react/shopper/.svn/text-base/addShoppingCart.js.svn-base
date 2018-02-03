import React from "react";

import {hashHistory} from 'react-router';

import {Form , Input , Button, Modal , Select ,Menu, Dropdown, Icon, message } from 'antd';
const FormItem = Form.Item;

var curShopper = [];
var newShopper = [];

class AddShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userId:this.props.params._id,
            commName:'',
            quantity:'',
            price:'',
            shopper:[]
        }
    }

    componentWillMount(){
      this.getUserSingle();
    }
    getUserSingle(){
      fetch("/users/getId", {
          method: "POST",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded"
          },
          body:`_id=${this.props.params._id}`,
          credentials: 'include'
      }).then(function(response) {
          return response.json();
      }).then((data) => {
          this.setState({
            shopper:data[0].shopper
          });

          curShopper = data[0].shopper;
          newShopper = data[0].shopper;
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

    handleSubmit(e) {
    
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {

                fetch("/users/addShoppingCart", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body:`_id=${this.props.params._id}&commName=${values.commName}&price=${values.price}&quantity=${values.quantity}`,
                    credentials: 'include'
                }).then(function(response) {
                    return response.json();
                }).then((data)=>{
                     var abc = this.state.userId
                     Modal.success({
                        title: '保存成功',
                        content: 'some messages...some messages...',
                        onOk(){
                          hashHistory.push(`/nav/shopper/seeShopping/${abc}`)
                        }
                      });
                });
          }
      
        });
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
                <h3>添加购物车>></h3>
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
                        <Input style={{width:50+'%'}} onBlur={(e) => this.setCommName(e)}/>
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
                        <Input style={{width:50+'%'}} onBlur={(e) => this.setQuantity(e)} />
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
                        <Input style={{width:50+'%'}} onBlur={(e) => this.setPrice(e)} />
                      )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="button" onClick={(e) => this.handleSubmit(e)} size="large">保存</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default Form.create()(AddShoppingCart);