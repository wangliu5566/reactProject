import React from 'react';
import {Form , Input , Button , Select ,Menu, Dropdown, Icon, message ,Popconfirm ,Modal} from 'antd';
import {hashHistory} from 'react-router';

const FormItem = Form.Item
const Option = Select.Option;
const OptGroup = Select.OptGroup;

var saveData = {};
var size = [];
var sizeValue = ['金黑','金白','银白','棕带金边白盘','黑带银边黑盘','黑带金边黑盘','黑带金边白盘','黑面蓝针','黑面橙针','黑面白针','白面','黑带黑面','银带蓝面','银带绿面','银带黑面','玫瑰金','流光银','玫瑰金黑','香槟金白','金白-网带','金黑-网带','棕带白面','黑带金黑']
    for(var i = 0 ; i < sizeValue.length; i ++){
    	size.push( <Option key={i+'option'} value={i}>{sizeValue[i]}</Option> )
    }

 class CommDetail extends React.Component{
	constructor(props){
		super(props)
		this.state={
	     commName:'',
	     module:'',		
	     watchCover:'',		
	     mirrorFace:'',		
	     headSize:'',		
	     watchBand:'',		
	     bodySize:'',		
	     waterDepth:'',		
	     color:[],		
	     price:'',
	     type:'1',		
         commPicUpload:true
		}
	}

    componentWillMount(){
    	this.getCommodity()
    }

    getCommodity(){
    	fetch("/commodity/commDetail", {
				    method: "post",
				    headers: {
				        "Content-Type": "application/x-www-form-urlencoded"
				    },
				    body:`_id=${this.props.params.commId}`,
					credentials: 'include'
				}).then(function(response) {
				    return response.json();
				}).then((data)=>{
                    this.setState(Object.assign({},this.state,data[0]))
				    saveData = this.state
				});
    }
    

    showPics(index){
    	hashHistory.push(`nav/commodity/commImages/${this.props.params.commId}`)
    }
    //跳往图片页

    handleSubmit() {

		        fetch("/commodity/updateCommodity", {
				    method: "post",
				    headers: {
				        "Content-Type": "application/x-www-form-urlencoded"
				    },
				    body:`commodity=${JSON.stringify(this.state)}`,
					credentials: 'include'
				}).then(function(response) {
				    return response.json();
				}).then((data)=>{
					if(data){
                      message.success('商品信息修改成功！')
                      this.getCommodity()
                      this.setState({
                      	commPicUpload:true
                      })
				    }
				});
	  } 

    handleCancle(){
    	this.setState(saveData)
    }

    del(){

    	fetch("/commodity/removeCommodity", {
				    method: "post",
				    headers: {
				        "Content-Type": "application/x-www-form-urlencoded"
				    },
				    body:`id=${this.props.params.commId}`,
					credentials: 'include'
				}).then(function(response) {
				    return response.json();
				}).then((data)=>{
					if(data){
                       Modal.success({
					    title: '商品删除成功！',
					    content: '点击回到之前页面！',
					    onOk(){
                            switch(saveData.type) {
				  	 	case '1':
				  	 		hashHistory.push('/nav/commodity/business/business')
				  	 		break;
				  	 	case '2':
				  	 		hashHistory.push('/nav/commodity/relaxation/relaxation')
				  	 		break;
				  	 	case '3':
				  	 		hashHistory.push('/nav/commodity/sports/sports')
				  	 		break;
				  	 	case '4':
				  	 		hashHistory.push('/nav/commodity/xianqiao/xianqiao')
				  	 		break;
				  	 	case '5':
				  	 		hashHistory.push('/nav/commodity/yayun/yayun')
				  	 		break;
				  	 	case '6':
				  	 		hashHistory.push('/nav/commodity/perfume/perfume')	
				  	 		break;		
				  	 }
					    }
					  });  
				    }
				});
    }


   


    handleChangeType(value) {
		  this.setState({
		  	type:value
		  })
		}

	handleChangeColor(value) {
		  this.setState({
		  	color:value
		  })
		}	

    setCommName(e){

       this.setState({
       	commName:e.target.value
       })
	}  
   //表型号 
	setPrice(e){
       this.setState({
       	price:e.target.value
       })
	} 
   //表价格
	setModule(e){
       this.setState({
       	module:e.target.value
       })
	} 
   //表芯
    setWatchCover(e){
       this.setState({
       	watchCover:e.target.value
       })
	} 
   //表壳 
	setMirrorFace(e){
       this.setState({
       	mirrorFace:e.target.value
       })
	} 
   //表镜面  
    setHeadSize(e){
       this.setState({
       	headSize:e.target.value
       })
	}  
   //表头尺寸
	setBodySize(e){
       this.setState({
       	bodySize:e.target.value
       })
	}
   //表盘尺寸 
    setWatchBand(e){
       this.setState({
       	watchBand:e.target.value
       })
	}
   //表带
   setWaterDepth(e){
       this.setState({
       	waterDepth:e.target.value
       })
	}
   //表防水深





    update(){
    	this.setState({
    		commPicUpload:false
    	})
    }

    toToday(){
    	hashHistory.push(`/nav/commodity/todayCommInfo/${this.props.params.commId}`)
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
		      
		return(
              <div>
                   <h3>商品详情 >>  <Button style={{marginLeft:20}} onClick={()=>this.toToday()}>添加为今日展示</Button></h3> 
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
					            <Input style={{width:50+'%'}} value={this.state.commName} disabled={this.state.commPicUpload} onChange={(e)=>this.setCommName(e)}/>
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
					            <Input style={{width:50+'%'}} value={this.state.module} disabled={this.state.commPicUpload} onChange={(e)=>this.setModule(e)}/>
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
					            <Input style={{width:50+'%'}} value={this.state.watchCover} disabled={this.state.commPicUpload} onChange={(e)=>this.setWatchCover(e)}/>
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
					            <Input style={{width:50+'%'}} value={this.state.mirrorFace} disabled={this.state.commPicUpload} onChange={(e)=>this.setMirrorFace(e)}/>
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
					            <Input style={{width:50+'%'}} value={this.state.headSize} disabled={this.state.commPicUpload} type='number' onChange={(e)=>this.setHeadSize(e)}/>
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
					            <Input style={{width:50+'%'}} type='number' value={this.state.bodySize} disabled={this.state.commPicUpload} onChange={(e)=>this.setBodySize(e)}/>
				            </div>
				          )}
				        </FormItem>

				        <FormItem
				          {...formItemLayout}
				          label='表带'
				        >
				          {getFieldDecorator('watchBand', {
				            rules: [{
				              required: true, message: '请输入该表的表带!',
				            }],
				          })(
				            <div>
					            <Input style={{width:50+'%'}} value={this.state.watchBand} disabled={this.state.commPicUpload} onChange={(e)=>this.setWatchBand(e)}/>
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
					            <Input style={{width:50+'%'}} value={this.state.waterDepth} disabled={this.state.commPicUpload} type='number' onChange={(e)=>this.setWaterDepth(e)}/>
				            </div>
				          )}
				        </FormItem>


				         <FormItem
				          {...formItemLayout}
				          label="商品类型"
				          hasFeedback
				        >

                          <Select defaultValue={this.state.type}
							    style={{ width: 200 }}
							    showSearch={false}
							    disabled={this.state.commPicUpload}
							    onChange={(value)=>this.handleChangeType(value)}
							  >
							      <Option value="1">商务系列</Option>
							      <Option value="2">休闲系列</Option>
							      <Option value="3">运动系列</Option>
							      <Option value="4">纤巧系列</Option>
							      <Option value="5">香水系列</Option>
							      <Option value="6">雅韵系列</Option>
						  </Select>
				        </FormItem>

                       
                         <FormItem
				          {...formItemLayout}
				          label='价格'
				        >
				          {getFieldDecorator('waterDepth', {
				            rules: [{
				              required: true, message: '请输入该表的价格!',
				            }],
				          })(
				            <div>
					            <Input style={{width:50+'%'}} value={this.state.price} disabled={this.state.commPicUpload} type='number' onChange={(e)=>this.setPrice(e)}/>
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
							    value={ this.state.color.map((item,index)=>{
								    	 for(var i = 0 ; i < sizeValue.length ; i++){
					    		    	 	if(i == item){
								    	 	     return sizeValue[i]
									    	 	}
									    	 }
									    })}
							    style={{ width: '100%' }}
							    placeholder={"请选择颜色"}
							    disabled={this.state.commPicUpload}
							    onChange={(value)=>this.handleChangeColor(value)}
							  >
							   {size}
						  </Select>
				        </FormItem>

				        

				        <FormItem {...tailFormItemLayout}>
				              <Button style={{marginRight:20}} onClick={()=>this.showPics()}>查看图片</Button>
				              <Button style={{marginRight:20}} onClick={()=>this.update()}>修改商品</Button>

				              <Popconfirm title="该操作会删除该商品所有信息,确定删除？" okText="确定" cancelText="取消" onConfirm={()=>this.del()}>
							    <Button style={{marginRight:20}}>删除商品</Button>
							  </Popconfirm>
				              
				              <Popconfirm title="确认修改商品信息？" onConfirm={()=>this.handleSubmit()} onCancel={()=>this.handleCancle()} okText="确定" cancelText="取消">
							    <Button type="primary" htmlType="button" size="large" disabled={this.state.commPicUpload}>保存</Button>  
							  </Popconfirm>
					          
					    </FormItem>
                 </Form>
           </div>

		)
	}
}

export default Form.create()(CommDetail)