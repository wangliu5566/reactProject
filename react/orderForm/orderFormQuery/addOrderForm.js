import React from 'react';
import { hashHistory } from 'react-router';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Modal } from 'antd';


const FormItem = Form.Item;
const Option = Select.Option;
var curOrder = [];
var newOrder = []

class AddOrderForm extends React.Component{
	constructor(props){
		super(props)
		this.state={
			userId : this.props.params.commId,
			commName : '',
			quantity : '',
			price : '',
			order:[],
		}		
	}
	//获取三个input里面的值
	getCommName(e){
		this.setState({
			commName : e.target.value
		})
	}
	getQuantity(e){
		this.setState({
			quantity : e.target.value
		})
	}
	getPrice(e){
		this.setState({
			price : e.target.value
		})
	}
	//强制更新
	handleSubmit(e){
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err,values)=>{
			if(!err){
				this.state.order = [...this.state.order,values];
				newOrder = this.state.order;
				this.forceUpdate();
			}
		})
	}

	render(){
		if(newOrder != curOrder&newOrder.length!== 0){
			    fetch("/users/addOrderForm", {
			        method: "POST",
			        headers: {
			              "Content-Type": "application/x-www-form-urlencoded"
			        },
			        body:`_id=${this.props.params.commId}&order=${JSON.stringify(newOrder)}`,
			        credentials: 'include'
			    }).then(function(response) {
			        return response.json();
			    }).then((data) => {
			 		Modal.success({
                        title: '添加成功',
                      });
			 		hashHistory.push(`/nav/orderForm/orderFormQuery/${data.userId}`)
			    });
		}
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
	  
		return(
			<div>
				<Form horizontal >
			        <FormItem
			          {...formItemLayout}
			          label="型号"
			          hasFeedback
			        >
			          {getFieldDecorator('commName', {
			            rules: [{
			              required: true, message: '请输入型号',
			            }]
			          })(
			            <Input onBlur={(e)=>this.getCommName(e)}/>
			          )}
			        </FormItem>

			        <FormItem
			          {...formItemLayout}
			          label="数量"
			          hasFeedback
			        >
			          {getFieldDecorator('quantity', {
			            rules: [{
			              required: true, message: '请输入数量',
			            }]
			          })(
			            <Input onBlur={(e)=>this.getQuantity(e)}/>
			          )}
			        </FormItem>

			        <FormItem
			          {...formItemLayout}
			          label="单价"
			          hasFeedback
			        >
				        {getFieldDecorator('price', {
				            rules: [{
				              required: true, message: '请输入单价',
				            }]
				        })(
				            <Input onBlur={(e)=>this.getPrice(e)}/>
				        )}
			        </FormItem>
			        <FormItem {...tailFormItemLayout}>
			          	<Button type="primary" htmlType="submit" size="large" onClick={(e)=>this.handleSubmit(e)}>提交</Button>
			        </FormItem>
			    </Form>
			</div>
		)
	}
}

export default Form.create()(AddOrderForm)