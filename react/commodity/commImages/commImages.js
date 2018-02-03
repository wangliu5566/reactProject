import React from 'react';
import {Select , Form, Upload, message, Button, Icon } from 'antd';
import FileList from './fileList.js'

const FormItem = Form.Item
const Option = Select.Option;
const OptGroup = Select.OptGroup;


export default class CommImages extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			imgType:'0',
			commId:this.props.params.commId,
			fileList:[],
			curPage:1,
			eachPage:10,
			maxPage:0,
			count:0,
		}
	}

    handleChangeType(value){

    	this.setState({
    		imgType:value
    	})

    	this.getCommImgsByPage({
			commId:this.state.commId,
			imgType:value
		})
    }
    //手动更改图片类型

    componentWillMount(){

    	this.getCommodity()
		this.getCommImgsByPage({
			commId:this.state.commId
		})
    } 

    //组件加载
    //
    getCommodity(){
    	fetch("/commodity/getCommodity", {
				    method: "post",
				    headers: {
				        "Content-Type": "application/x-www-form-urlencoded"
				    },
				    body:`_id=${this.props.params.commId}`,
					credentials: 'include'
				}).then(function(response) {
				    return response.json();
				}).then((data)=>{
					this.setState({commName:data[0].commName})
				});
    }



    getCommImgsByPage({eachPage=10,curPage=1,commId=0,imgType=-1}){
    	fetch("/files/getCommImgs", {
				    method: "POST",
				    headers: {
				        "Content-Type": "application/x-www-form-urlencoded"
				    },
				    body: `commId=${commId}&imgType=${imgType}&eachPage=${eachPage}&curPage=${curPage}`,
					credentials: 'include'
				}).then(function(response) {
				    return response.json();
				}).then((data)=>{

					if(data){
						this.setState(
                          {
                          fileList:data.data,
                          count:data.count}
						)
					}
				});
    }
   //获取图片

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

        const props = {
			  name: 'file',
			  action: '/files/upload',
			  headers: {
			    authorization: 'authorization-text',
			  },
			  data:this.state,
			  multiple:true,
			  showUploadList:false,
			  beforeUpload:(file, fileList)=>{
			  	return fetch("/files/isExist", {
						    method: "POST",
						    headers: {
						        "Content-Type": "application/x-www-form-urlencoded"
						    },
						    body: `commId=${this.state.commId}&imgType=${this.state.imgType}&name=${file.name}`,
							credentials: 'include'
						}).then(function(response) {
						    return response.json();
						}).then((data)=>{
							if(data){
							   message.warning(file.name+'已存在！')
							   return new Promise(()=>{})	
							}
						});
			  },

			  onChange:(info)=>{
			    if (info.file.status !== 'uploading') {
			      // console.log(info.file, info.fileList);
			    }
			    if (info.file.status === 'done') {
			    	
                  this.setState({
                     fileList:info.fileList[0].response
                  })
			      message.success(`${info.file.name} 图片上传完成！`);
			    } else if (info.file.status === 'error') {
			      message.error(`${info.file.name} file upload failed.`);
			    }
			  },
			};
       //上传图片
		return (
           <div>
               <h3 style={{fontWeight:600}}>商品型号：{this.state.commName} >></h3>
               <Form style={{marginTop:30}} horizontal>
                  <FormItem
				          {...formItemLayout}
				          label='图片类型'
				          hasFeedback
				        >

	                  <Select defaultValue='-1'
					    style={{ width: 200 }}
					    showSearch={false}
					    onChange={(value)=>this.handleChangeType(value)}
					  >
					      <Option value="-1">全部图片</Option>
					      <Option value="0">首页图片</Option>
					      <Option value="1">分页轮播图(大)</Option>
					      <Option value="2">分页轮播图(小)</Option>
					      <Option value="3">详情图片</Option>
				     </Select>
				  </FormItem>

				  <FormItem
				          {...formItemLayout}
				          label='上传图片'
				          hasFeedback
				        >

                     <Upload {...props}>
					    <Button type="ghost">
					      <Icon type="upload" /> 选择图片...
					    </Button>
					  </Upload>
				  </FormItem>
			   </Form>	
			  <FileList getCommImgsByPage={(page)=>this.getCommImgsByPage(page)} count={this.state.count} data={this.state.fileList}  commId={this.state.commId}/>         
           </div>
		)
	}
}

