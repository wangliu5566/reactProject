import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import {
    Form,
    Input,
    Table,
    Button,
    Popconfirm,
    Select,
    Row,
    Col,
    Cascader,
    message
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

export default class Updata extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            _id: this.props.params._id,
            username: '',
            password: '',
            phoneNum: '',
            address: '',
            email: '',
            disabled:true
        }
    }

    componentWillMount() {
        fetch("/users/getId", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `_id=${this.props.params._id}`
        }).then(function(response) {
            return response.json();
        }).then((data) => {
            this.setState(data[0]);
        });
    }
    checkConfirm(rule, value, callback) {
        const form = this.props.form;
        if (value && this.state.passwordDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    }
    handleSubmit() {
      console.log(this.state);
      fetch("/users/updateUser", {
      method: "post",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      body:`users=${JSON.stringify(this.state)}`,
      credentials: 'include'
  }).then(function(response) {
      return response.json();
  }).then((data)=>{
    if(data){
        message.success('用户信息修改成功！');
        }
      })
  }


    changeMail(e){
      this.setState({email:e.target.value})
    }
    changePnum(e){
      this.setState({phoneNum:e.target.value})
    }
    changePwd(e){
      this.setState({password:e.target.value})
    }
    changeName(e){
      this.setState({username:e.target.value})
    }
    onChange(value) {

    this.setState({address:value.join(",")});
    }
    change(){
      this.setState({disabled:false})
    }
    render() {
        var adder = this.state.address.split(",");

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


        const residences = [
            {
                value: '四川省',
                label: '四川省',
                children: [
                    {
                        value: '成都市',
                        label: '成都市',
                        children: [
                            {
                                value: '武侯区',
                                label: '武侯区'
                            }, {
                                value: '高新区',
                                label: '高新区'
                            }, {
                                value: '锦江区',
                                label: '锦江区'
                            }
                        ]
                    }, {
                        value: '绵阳市',
                        label: '绵阳市',
                        children: [
                            {
                                value: '绵阳一区',
                                label: '绵阳一区'
                            }, {
                                value: '绵阳二区',
                                label: '绵阳二区'
                            }, {
                                value: '绵阳三区',
                                label: '绵阳三区'
                            }
                        ]
                    }
                ]
            }
        ];

        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="用户名" hasFeedback>
                    <Input type="text" ref='userN' value={this.state.username} onChange={(e) => this.changeName(e)} disabled ={this.state.disabled}/>
                </FormItem>
                <FormItem {...formItemLayout} label="密码" hasFeedback>
                    <Input type="text" ref="passW" value={this.state.password} onChange={(e)=>this.changePwd(e)} disabled ={this.state.disabled}/>
                </FormItem>
                <FormItem {...formItemLayout} label="E-mail" hasFeedback>
                    <Input ref="mail" value={this.state.email} onChange={(e)=>this.changeMail(e)} disabled ={this.state.disabled}/>
                </FormItem>
                <FormItem {...formItemLayout} label="手机号">
                    <Input ref="phone" value={this.state.phoneNum} onChange={(e)=>this.changePnum(e)} disabled ={this.state.disabled}/>
                </FormItem>
                <FormItem {...formItemLayout} label="地址">
                    <Cascader value={[adder[0], adder[1], adder[2]]} options={residences} onChange={(value) => this.onChange(value)} disabled ={this.state.disabled}/>
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" size="large" style={{
                        marginLeft: 80 + 'px'
                    }} onClick={() => this.change()}>
                        修改信息
                    </Button>
                    <Button type="primary" htmlType="submit" size="large" style={{
                        marginLeft: 80 + 'px'
                    }} onClick={() => this.handleSubmit()} disabled ={this.state.disabled}>
                      保存
                    </Button>
                </FormItem>
            </Form>

        );

    }

}
