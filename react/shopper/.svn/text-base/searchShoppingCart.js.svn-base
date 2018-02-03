import React from 'react';
import {Table,Form , Input , Button, Modal , Select ,Menu, Dropdown, Icon, message } from 'antd';
const FormItem = Form.Item;

class SearchShoppingCart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                username:'',
                phoneNum:'',
                address:'',
                data:[] 
            }
        }
    }

    search(){

         if(this.refs.searchInfo.refs.input.value == ''){
            Modal.warning({
                title: '请输入查询条件',
              });
        }else{
            fetch("/users/searchShoppingCart", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body:`searchInfo=${this.refs.searchInfo.refs.input.value}`,
                    credentials: 'include'
                }).then(function(response) {
                    return response.json();
                }).then((data)=>{
                    
                    this.setState({data:data})
                });
        }   
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
      const pagination = {
          total:this.state.data.length,
          showSizeChanger: false,
          onShowSizeChange: (current, pageSize) => {
            console.log('Current: ', current, '; PageSize: ', pageSize);
          },
          onChange: (current) => {
            console.log('Current: ', current);
          },
        };

      const columnsTwo = [{
          title: '商品型号',
          dataIndex: 'commName',
        }, {  
          title: '商品数量',
          dataIndex: 'quantity',
        }, {
          title: '商品价格',
          dataIndex: 'price',
        }];
        return(
            <div>
                <Input placeholder="请输入查询条件(用户名)" ref='searchInfo'
                style={{width:50+'%',marginLeft:20+'%',marginTop:60+'px'}}/>
                <Button type="ghost" icon="search" type="primary" onClick={() => this.search()}>查询</Button>
                <Form style={{marginTop:30}} inline>
                    <FormItem
                      {...formItemLayout}
                      label="用户名"
                      hasFeedback
                    >
                      {getFieldDecorator('username')(
                        <Input style={{width:80+'%'}} placeholder={this.state.data.username}/>
                      )}
                    </FormItem>
                    <FormItem
                      {...formItemLayout}
                      label="电话"
                      hasFeedback
                    >
                      {getFieldDecorator('quantity')(
                        <Input style={{width:100+'%'}} placeholder={this.state.data.phoneNum} />
                      )}
                    </FormItem>
                    <FormItem
                      {...formItemLayout}
                      label="地址"
                      hasFeedback
                    >
                      {getFieldDecorator('price')(
                        <Input style={{width:140+'%'}} placeholder={this.state.data.address} />
                      )}
                    </FormItem>
                </Form>
                 <Table bordered columns={columnsTwo} dataSource={this.state.data.data} pagination={pagination}
                style={{marginTop:30+'px'}}/>  
            </div>
            )
    }
}

export default Form.create()(SearchShoppingCart);

   