import React from 'react';
import ReactDom from 'react-dom';
import {hashHistory} from 'react-router';
import {Form, Icon, Input, Button, Checkbox, } from 'antd'
import './login/login.css'

const FormItem = Form.Item;


export default class Login extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    const NormalLoginForm = Form.create()(React.createClass({
      handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      },
      reg() {
        console.log(123);
          hashHistory.push("/reg");
      },
        render() {
          const { getFieldDecorator } = this.props.form;
          return (

            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '请输入用户名/邮箱/电话!' }],
                })(
                  <Input addonBefore={<Icon type="user" />} placeholder="用户名/邮箱/电话" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }],
                })(
                  <Input addonBefore={<Icon type="lock" />} type="password" placeholder="请输入密码" />
                )}

              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot">Forgot password</a>
                <div style={{marginLeft:200+'px'}}>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
                <Button
                  type="primary"
                  size="large"
                  style={{marginLeft:20+'px'}}
                  onClick={()=>this.reg()}
                  >
                  注册
                </Button>
                </div>
              </FormItem>
            </Form>

          );
        },
      }));


    return (
      <div style={{width:400+'px',height:400+'px',marginLeft:25+'%',marginTop:10+'%'}}>
        <NormalLoginForm />
      </div>
    );

  }
}
