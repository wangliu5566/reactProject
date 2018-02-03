import React from 'react';
import {Form , Input , Button , Select ,Menu, Dropdown, Icon, message } from 'antd';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {setCommAttr,addCommHandleSubmit} from '../../commodityAction.js'

import './addCommodity.css'

const FormItem = Form.Item
const Option = Select.Option;
const OptGroup = Select.OptGroup;

class AddCommodity extends React.Component{
	constructor(props){
		super(props)
		this.state={
			commPicUpload:true
		}
	}
   
    
    handleSubmit(e) {
	    e.preventDefault();
	    this.props.form.validateFieldsAndScroll((err, values) => {
	      if (!err) {
	      	  this.props.dispatch(addCommHandleSubmit(this.props))
	      }
	    });
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
		    };


        var size = [];
		var sizeValue = ['金黑','金白','银白','棕带金边白盘','黑带银边黑盘','黑带金边黑盘','黑带金边白盘','黑面蓝针','黑面橙针','黑面白针','白面','黑带黑面','银带蓝面','银带绿面','银带黑面','玫瑰金','流光银','玫瑰金黑','香槟金白','金白-网带','金黑-网带','棕带白面','黑带金黑']
		    for(var i = 0 ; i < sizeValue.length; i ++){
		    	size.push( <Option key={i+'option'} value={i}>{sizeValue[i]}</Option> )
		    }  

		return (
                 <div>
                   <h3>添加商品 >></h3> 
                   <Form style={{marginTop:30,marginLeft:30}} horizontal>
                       <FormItem
				          {...formItemLayout}
				          label='型号'
				        >
				          {getFieldDecorator('commName', {
				            rules: [{
				              required: true, message: '请输入商品型号!',
				            }],
				          })(
				            <div>
					            <Input style={{width:50+'%'}} onBlur={(e)=>this.props.dispatch(setCommAttr(e,'commName'))}/>
				            </div>
				          )}
				        </FormItem>

				        <FormItem
				          {...formItemLayout}
				          label='机芯'
				        >
				          {getFieldDecorator('module', {
				            rules: [{
				              required: true, message: '请输入该表的机芯!',
				            }],
				          })(
				            <div>
					            <Input style={{width:50+'%'}} onBlur={(e)=>this.props.dispatch(setCommAttr(e,'module'))}/>
				            </div>
				          )}
				        </FormItem>

				        <FormItem
				          {...formItemLayout}
				          label='表壳'
				        >
				          {getFieldDecorator('watchCover', {
				            rules: [{
				              required: true, message: '请输入该表的表壳!',
				            }],
				          })(
				            <div>
					            <Input style={{width:50+'%'}} onBlur={(e)=>this.props.dispatch(setCommAttr(e,'watchCover'))}/>
				            </div>
				          )}
				        </FormItem>

				        <FormItem
				          {...formItemLayout}
				          label='镜面'
				        >
				          {getFieldDecorator('mirrorFace', {
				            rules: [{
				              required: true, message: '请输入该表的镜面!',
				            }],
				          })(
				            <div>
					            <Input style={{width:50+'%'}} onBlur={(e)=>this.props.dispatch(setCommAttr(e,'mirrorFace'))}/>
				            </div>
				          )}
				        </FormItem>

				        <FormItem
				          {...formItemLayout}
				          label='表头尺寸(毫米)'
				        >
				          {getFieldDecorator('headSize', {
				            rules: [{
				              required: true, message: '请输入该表的表头尺寸!',
				            }],
				          })(
				            <div>
					            <Input style={{width:50+'%'}} type='number' onBlur={(e)=>this.props.dispatch(setCommAttr(e,'headSize'))}/>
				            </div>
				          )}
				        </FormItem>

				        <FormItem
				          {...formItemLayout}
				          label='表盘尺寸(毫米)'
				        >
				          {getFieldDecorator('bodySize', {
				            rules: [{
				              required: true, message: '请输入该表的表盘尺寸!',
				            }],
				          })(
				            <div>
					            <Input style={{width:50+'%'}} type='number' onBlur={(e)=>this.props.dispatch(setCommAttr(e,'bodySize'))}/>
				            </div>
				          )}
				        </FormItem>

				        <FormItem
				          {...formItemLayout}
				          label='表带'
				        >
				          {getFieldDecorator('watchBand', {
				            rules: [{
				              required: true, message: '请输入该表的镜面!',
				            }],
				          })(
				            <div>
					            <Input style={{width:50+'%'}} onBlur={(e)=>this.props.dispatch(setCommAttr(e,'watchBand'))}/>
				            </div>
				          )}
				        </FormItem>

				        <FormItem
				          {...formItemLayout}
				          label='防水深度(米)'
				        >
				          {getFieldDecorator('waterDepth', {
				            rules: [{
				              required: true, message: '请输入该表的防水深度!',
				            }],
				          })(
				            <div>
					            <Input style={{width:50+'%'}} type='number' onBlur={(e)=>this.props.dispatch(setCommAttr(e,'waterDepth'))}/>
				            </div>
				          )}
				        </FormItem>


				         <FormItem
				          {...formItemLayout}
				          label="商品类型"
				          hasFeedback
				        >

                          <Select defaultValue='1'
							    style={{ width: 200 }}
							    showSearch={false}
							    onChange={(e)=>this.props.dispatch(setCommAttr(e,'type'))}
							  >
							      <Option value="1">商务系列</Option>
							      <Option value="2">休闲系列</Option>
							      <Option value="3">运动系列</Option>
							      <Option value="4">纤巧系列</Option>
							      <Option value="5">雅韵系列</Option>
							      <Option value="6">香水系列</Option>
						  </Select>
				        </FormItem>

                       
                         <FormItem
				          {...formItemLayout}
				          label='价格'
				        >
				          {getFieldDecorator('price', {
				            rules: [{
				              required: true, message: '请输入该表的价格!',
				            }],
				          })(
				            <div>
					            <Input style={{width:50+'%'}} type='number' onBlur={(e)=>this.props.dispatch(setCommAttr(e,'price'))}/>
				            </div>
				          )}
				        </FormItem>

				         <FormItem
				          {...formItemLayout}
				          label="商品颜色"
				          hasFeedback
				        >
				          <Select
							    multiple
							    style={{ width: '100%' }}
							    placeholder={"请选择颜色"}
							    onChange={(e)=>this.props.dispatch(setCommAttr(e,'color'))}
							  >
							   {size}
						  </Select>
				        </FormItem>

				        
                        
                        <FormItem {...tailFormItemLayout}>
					          <Button type="primary" htmlType="button" size="large" disabled={this.props.config.commPicUpload} onClick={()=>hashHistory.push('/nav/commodity/commImages/'+this.props.config.commId)}>上传图片</Button>
					    </FormItem> 

				        <FormItem {...tailFormItemLayout}>
					          <Button type="primary" htmlType="button" size="large" disabled={!this.props.config.commPicUpload} onClick={(e)=>this.handleSubmit(e)}>保存</Button>
					    </FormItem>
                 </Form>
           </div>
		)
	}
}


function select(state) {
	return {
		config:state.addCommodity
	}
}


export default connect(select)(Form.create()(AddCommodity))




