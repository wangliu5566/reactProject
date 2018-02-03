import React from 'react';
import { Collapse,Button} from 'antd';
import TodayCommList from './todayCommList.js'

const Panel = Collapse.Panel;



export default class TodayCommodity extends React.Component{
	constructor(props){
		super(props)
		this.state={
          commName:'',
          commBox:'',
          type:'',
          data:[]
		}
	}


   callback(key){
   	 
   }

   componentWillMount(){
    this.getTodayCommInfo()
   }

    getTodayCommInfo(){
      fetch("/commodity/getTodayCommInfo", {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
           
          credentials: 'include'
        }).then(function(response) {
            return response.json();
        }).then((data)=>{
           
            this.setState({data:data})
        });
    }

    
	render(){

		return (
           <Collapse defaultActiveKey={['0','1']} onChange={(key)=>this.callback(key)}>
  			    {this.state.data.map((item,index)=>{
                      return <Panel header={item.commName} key={index}>
  						      <TodayCommList data={item}/>
  						    </Panel>
  			    })}
    			</Collapse>
		)
	}
} 

