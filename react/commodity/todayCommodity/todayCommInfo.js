import React from 'react';
import {Form , Input , Button , Select ,Menu, Dropdown, Icon, message ,Popconfirm ,Modal} from 'antd';
import {hashHistory} from 'react-router';

const FormItem = Form.Item
const Option = Select.Option;
const OptGroup = Select.OptGroup;



 class TodayCommInfo extends React.Component{
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
            this.setState({commName:data[0].commName})
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


    // handleSubmit(){
    //   fetch("/commodity/addTodayCommInfo", {
    //         method: "post",
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded"
    //         },
    //         body:`commodityInfo=${JSON.stringify(this.state)}`,
    //       credentials: 'include'
    //     }).then(function(response) {
    //         return response.json();
    //     }).then((data)=>{
    //            if(data){
    //              Modal.success({
    //                   title: '该商品的展示信息添加成功！',
    //                   content: '点击跳转至展示列表',
    //                   onOk(){
    //                     hashHistory.push('/nav/commodity/todayCommodity')
    //                   }
    //                 });
    //         }
    //     });

    // }


    handleSubmit(e) {
      e.preventDefault();

      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
            fetch("/commodity/addTodayCommInfo", {
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
                      title: '该商品的展示信息添加成功！',
                      content: '点击跳转至展示列表',
                      onOk(){
                        hashHistory.push('/nav/commodity/todayCommodity')
                      }
                    });
            }
        });
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
                              <Input style={{width:80+'%'}} onBlur={(e)=>this.setCommTitle(e)}/>
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
                              <Input style={{width:80+'%'}} onBlur={(e)=>this.setCommP1(e)}/>
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
                              <Input style={{width:80+'%'}} onBlur={(e)=>this.setCommP2(e)}/>
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
                              <Input style={{width:40+'%'}} onBlur={(e)=>this.setCommBox(e)}/>
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
                              <Input style={{width:80+'%'}} onBlur={(e)=>this.setCommSpecial1(e)}/>
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
                              <Input style={{width:80+'%'}} onBlur={(e)=>this.setCommSpecial2(e)}/>
                            </div>
                          )}
                          
                      </FormItem>

                      <FormItem
                        {...formItemLayout}
                        label='特色3'
                      >
                          <Input style={{width:80+'%'}} onBlur={(e)=>this.setCommSpecial3(e)}/>
                      </FormItem>

                      <FormItem
                        {...formItemLayout}
                        label='确认'
                        style={{borderTop:'1px solid #ddd',paddingTop:10}}
                      >
                          <Button type="primary" htmlType="button" size="large" style={{width:80}} onClick={(e)=>this.handleSubmit(e)}>保存</Button>  

                          <Button htmlType="button" size="large" style={{marginLeft:30,width:80}} onClick={()=>this.cancle()}>取消</Button> 
                      </FormItem>




                   </Form>
           </div>        
		)
	}
} 

export default Form.create()(TodayCommInfo)