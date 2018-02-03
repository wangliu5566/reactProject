import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

export default class AdmReg extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
      const residences = [{
              value: '四川省',
              label: '四川省',
              children: [{
                value: '成都市',
                label: '成都市',
                children: [{
                  value: '武侯区',
                  label: '武侯区',
                },{
                  value: '高新区',
                  label: '高新区',
                },
                {
                  value: '锦江区',
                  label: '锦江区',
                }],
              },
              {
                value: '绵阳市',
                label: '绵阳市',
                children: [{
                  value: '绵阳一区',
                  label: '绵阳一区',
                },{
                  value: '绵阳二区',
                  label: '绵阳二区',
                },
                {
                  value: '绵阳三区',
                  label: '绵阳三区',
                }],
              }
            ]
            } ];

        const RegistrationForm = Form.create()(React.createClass({
            getInitialState() {
                return {passwordDirty: false};
            },
            handleSubmit(e) {
                e.preventDefault();
                this.props.form.validateFieldsAndScroll((err, values) => {
                    if (!err) {
                        // console.log('Received values of form: ', values);
                        fetch("/users/admReg", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            body: `users=${JSON.stringify(values)}`,
                            credentials: 'include'
                        }).then(function(response) {
                          
                            return response.json();
                        }).then((data) => {
                            console.log(data);
                            if (data) {
                                hashHistory.push("/admin/admLogin");
                            }
                        });
                    }
                });
            },
            handlePasswordBlur(e) {
                const value = e.target.value;
                this.setState({
                    passwordDirty: this.state.passwordDirty || !!value
                });
            },
            checkPassword(rule, value, callback) {
                const form = this.props.form;
                if (value && value !== form.getFieldValue('password')) {
                    callback('两次输入的密码不一致!');
                } else {
                    callback();
                }
            },
            checkConfirm(rule, value, callback) {
                const form = this.props.form;
                if (value && this.state.passwordDirty) {
                    form.validateFields(['confirm'], {force: true});
                }
                callback();
            },
            render() {
                const {getFieldDecorator} = this.props.form;
                const formItemLayout = {
                    labelCol: {
                        span: 8
                    },
                    wrapperCol: {
                        span: 8
                    }
                };
                const tailFormItemLayout = {
                    wrapperCol: {
                        span: 14,
                        offset: 6
                    }
                };

                return (
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormItem {...formItemLayout} label="用户名" hasFeedback>
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入用户名!'
                                    }
                                ]
                            })(<Input type="text" onBlur={this.handlePasswordBlur}/>)}
                        </FormItem>

                        <FormItem {...formItemLayout} label="密码" hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入密码!'
                                    }, {
                                        validator: this.checkConfirm
                                    }
                                ]
                            })(<Input type="password" onBlur={this.handlePasswordBlur}/>)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="确认密码" hasFeedback>
                            {getFieldDecorator('confirm', {
                                rules: [
                                    {
                                        required: true,
                                        message: '再次输入密码!'
                                    }, {
                                        validator: this.checkPassword
                                    }
                                ]
                            })(<Input type="password"/>)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="E-mail" hasFeedback>
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: '请输入正确的邮箱'
                                    }, {
                                        required: true,
                                        message: '输入邮箱!'
                                    }
                                ]
                            })(<Input/>)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="手机号">
                            {getFieldDecorator('phoneNum', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入您的手机号!'
                                    }
                                ]
                            })(<Input/>)}
                        </FormItem>

                        <FormItem {...formItemLayout} label="地址">
                            {getFieldDecorator('address', {
                                rules: [
                                    {
                                        type: 'array',
                                        required: true,
                                        message: '请选取地址!'
                                    }
                                ]
                            })(<Cascader options={residences}/>)}
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" size="large" style={{
                                marginLeft: 80 + 'px'
                            }} onClick={(e) => this.handleSubmit(e)}>
                                注册
                            </Button>
                        </FormItem>
                    </Form>
                );
            }
        }));
        return (<RegistrationForm/>);

    }
}
