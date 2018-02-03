import React from 'react';
import {Form , Input , Button , Select ,Menu, Dropdown, Icon, message ,Popconfirm ,Modal} from 'antd';
import {hashHistory} from 'react-router';

const FormItem = Form.Item
const Option = Select.Option;
const OptGroup = Select.OptGroup;
var flag=true


 class UpdateTodayInfo extends React.Component{
	constructor(props){
		super(props)
    this.state={
       commId:this.props.params.commId,
       commName:'',
       commTitle:'',
       commP1:'',
       commP2:'',
       commBox:'',
       commSpecial:{}
    }
	}

  componentWillMount(){
      this.getCommodity()
    }

    getCommodity(){
      fetch("/commodity/getThisTodayCommInfo", {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:`_id=${this.props.params.commId}`,
          credentials: 'include'
        }).then(function(response) {
            return response.json();
        }).then((data)=>{
            this.setState(Object.assign(this.state,data[0]))
        });
    }

    setCommTitle(e){
      this.setState({
        commTitle:e.target.value
      })
    }

    setCommP1(e){
      this.setState({
        commP1:e.target.value
      })
    }

    setCommP2(e){
      this.setState({
        commP2:e.target.value
      })
    }

    setCommBox(e){
      this.setState({
        commBox:e.target.value
      })
    }

    setCommTitle(e){
      this.setState({
        commTitle:e.target.value
      })
    }


    setCommSpecial1(e){
      this.state.commSpecial.special1 = e.target.value
      this.setState({
        commSpecial:this.state.commSpecial
      })
    }

    setCommSpecial2(e){
      this.state.commSpecial.special2 = e.target.value
      this.setState({
        commSpecial:this.state.commSpecial
      })
    }

    setCommSpecial3(e){
      this.state.commSpecial.special3 = e.target.value
      this.setState({
        commSpecial:this.state.commSpecial
      })
    }

    cancle(){
      hashHistory.push(`/nav/commodity/commDetail/${this.props.params.commId}`)
    }

    update(){
      flag = false;
      this.forceUpdate();
    }

    del(){
      fetch("/commodity/removeTodayCommInfo", {
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
                title: '商品取消成功！',
                content: '点击回到之前页面！',
                onOk(){
                     hashHistory.push('/nav/commodity/todayCommodity')      
               }
            });  
            }
        });
    }



    handleSubmit() {
            fetch("/commodity/updateTodayCommInfo", {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:`commodityInfo=${JSON.stringify(this.state)}`,
          credentials: 'include'
        }).then(function(response) {
            return response.json();
        }).then((data)=>{
              if(data){
                 Modal.success({
                      title: '该商品的展示信息修改成功！',
                    })
                 this.getCommodity()
                 flag = true;
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

		return (
           <div>
                   <h3>商品展示信息 >> 型号:<b style={{width:30+'%'}}>{this.state.commName}</b>
                   </h3> 
                   <Form horizontal>

                      <FormItem
                        {...formItemLayout}
                        label='商品展示信息'
                        style={{borderTop:'1px solid #ddd',paddingTop:10}}
                      >

                      </FormItem>


                      <FormItem
                        {...formItemLayout}
                        label='标题'
                      >
                          {getFieldDecorator('commTitle', {
                            rules: [{
                              required: true, message: '请输入该商品展示的标题!',
                            }],
                          })(
                            <div>
                              <Input disabled={flag} value={this.state.commTitle} style={{width:80+'%'}} onChange={(e)=>this.setCommTitle(e)}/>
                            </div>
                          )}
                      </FormItem>

                      <FormItem
                        {...formItemLayout}
                        label='商品信息1'
                      >
                          {getFieldDecorator('commP1', {
                            rules: [{
                              required: true, message: '请输入该商品第一条展示信息!',
                            }],
                          })(
                            <div>
                              <Input disabled={flag} value={this.state.commP1} style={{width:80+'%'}} onChange={(e)=>this.setCommP1(e)}/>
                            </div>
                          )}
                      </FormItem>

                      <FormItem
                        {...formItemLayout}
                        label='商品信息2'
                      >
                          {getFieldDecorator('commP2', {
                            rules: [{
                              required: true, message: '请输入该商品第二条展示信息!',
                            }],
                          })(
                            <div>
                              <Input disabled={flag} value={this.state.commP2} style={{width:80+'%'}} onChange={(e)=>this.setCommP2(e)}/>
                            </div>
                          )}
                      </FormItem>

                      <FormItem
                        {...formItemLayout}
                        label='商品精华信息'
                      >
                          {getFieldDecorator('commBox', {
                            rules: [{
                              required: true, message: '请输入该商品精华信息!',
                            }],
                          })(
                            <div>
                              <Input style={{width:40+'%'}} value={this.state.commBox} disabled={flag} onChange={(e)=>this.setCommBox(e)}/>
                            </div>
                          )}
                      </FormItem>

                      <FormItem
                        {...formItemLayout}
                        label='商品特色'
                        style={{borderTop:'1px solid #ddd',paddingTop:10}}
                      >

                      </FormItem>

                      <FormItem
                        {...formItemLayout}
                        label='特色1'
                      >
                       {getFieldDecorator('special1', {
                            rules: [{
                              required: true, message: '请输入该商品第一条特色信息!',
                            }],
                          })(
                            <div>
                              <Input disabled={flag} value={this.state.commSpecial.special1} style={{width:80+'%'}} onChange={(e)=>this.setCommSpecial1(e)}/>
                            </div>
                          )}
                          
                      </FormItem>

                      <FormItem
                        {...formItemLayout}
                        label='特色2'
                      >
                         {getFieldDecorator('special2', {
                            rules: [{
                              required: true, message: '请输入该商品第二条特色信息!',
                            }],
                          })(
                            <div>
                              <Input disabled={flag} value={this.state.commSpecial.special2} style={{width:80+'%'}} onChange={(e)=>this.setCommSpecial2(e)}/>
                            </div>
                          )}
                          
                      </FormItem>

                      <FormItem
                        {...formItemLayout}
                        label='特色3'
                      >
                          <Input style={{width:80+'%'}} value={this.state.commSpecial.special3} disabled={flag} onChange={(e)=>this.setCommSpecial3(e)}/>
                      </FormItem>

                      <FormItem
                        {...formItemLayout}
                        label='操作'
                        style={{borderTop:'1px solid #ddd',paddingTop:10}}
                      >
                          <Button htmlType="button" size="large" onClick={()=>this.update()}>修改</Button>   

                          <Popconfirm title="是否取消该商品的今日展示？" okText="是" cancelText="否" onConfirm={()=>this.del()}>
                            <Button style={{marginLeft:30}}>取消展示</Button>
                          </Popconfirm>

                          <Button type="primary" htmlType="button" size="large" disabled={flag} style={{marginLeft:30}} onClick={(e)=>this.handleSubmit(e)}>保存</Button>
                      </FormItem>




                   </Form>
           </div>        
		)
	}
} 

export default Form.create()(UpdateTodayInfo)