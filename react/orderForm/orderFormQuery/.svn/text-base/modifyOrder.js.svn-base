import React from 'react';
import { hashHistory } from 'react-router';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Modal } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;


var newData = [];

class ModifyOrder extends React.Component {
	constructor(props){
		super(props);
		this.state={
			_id : this.props.params._id,
			data:[]
		}
		
		
	}
	//进入页面就是启用函数
  componentWillMount(){
    this.getUserModify()
  }
   //获取该用户订单信息
   	getUserModify(){
    fetch('/users/getUserModify',{
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body:`_id=${this.props.params._id}`,
    }).then(function(response){
      return response.json();
    }).then((data)=>{
 		newData = data[0]
	    this.setState({
	    	data:data
	    })

    })
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
	handleSubmit(e){
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err,values)=>{
			if(!err){
				fetch("/users/modifyUser", {
				    method: "POST",
				    headers: {
				          "Content-Type": "application/x-www-form-urlencoded"
				    },
				    body:`_id=${this.props.params._id}&commName=${values.commName}&quantity=${values.quantity}&price=${values.price}`,
				    credentials: 'include'
				}).then(function(response) {
				    return response.json();
				}).then((data) => {
					console.log(data)
						Modal.success({
				        title: '添加成功',
				      });
				});
			}
		})
	}

	

	render(){
		
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
				<Form horizontal>
			        <FormItem {...formItemLayout} label="型号" hasFeedback >
			          {getFieldDecorator('commName', {})(
			            <Input placeholder={ newData.commName } onBlur={(e) => this.setCommName(e)}/>
			          )}
			        </FormItem>


			        <FormItem {...formItemLayout} label="数量" hasFeedback >
			          {getFieldDecorator('quantity', {})(
			            <Input placeholder={ newData.quantity } onBlur={(e) => this.setQuantity(e)}/>
			          )}
			        </FormItem>


			        <FormItem {...formItemLayout} label="单价" hasFeedback >
			          {getFieldDecorator('price', {})(
			            <Input placeholder={ newData.price } onBlur={(e) => this.setPrice(e)}/>
			          )}
			        </FormItem>

			        <FormItem {...tailFormItemLayout}>
			         <Button type="primary" htmlType="submit" size="large" onClick={(e)=>this.handleSubmit(e)}>确认修改</Button>
			        </FormItem>
			    </Form>
			</div>
		)
	}
}

export default Form.create()(ModifyOrder);