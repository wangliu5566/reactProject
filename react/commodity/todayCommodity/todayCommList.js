import React from 'react';
import {Button} from 'antd';
import {hashHistory} from 'react-router';


export default class TodayCommList extends React.Component{
	constructor(props){
		super(props)
	}

	toCommDetail(){
       hashHistory.push(`/nav/commodity/commDetail/${this.props.data.commId}`)
	}

	toCommImages(){
       hashHistory.push(`/nav/commodity/commImages/${this.props.data.commId}`)
	}

	toCommTodayInfo(){
		hashHistory.push(`/nav/commodity/updateTodayInfo/${this.props.data.commId}`)
	}



	render(){
		const STYLE = {border:'1px solid #ddd',width: 140,padding: '5px 0'}
		return(
          <div>
            <table id='todayList' style={{borderCollapse: 'collapse'}}>	
		       <thead>
		       	  <tr>
		       	  	<th style={STYLE}>商品型号</th>
		       	  	<th style={STYLE}>商品精华</th>
		       	  	<th style={STYLE}>查看基本信息</th>
		       	  	<th style={STYLE}>查看展示信息</th>
		       	  	<th style={STYLE}>查看商品图片</th>
		       	  </tr>
		       </thead>
		       <tbody>
                   <tr>
	       	          <td style={STYLE}>{this.props.data.commName}</td>
	       	          <td style={STYLE}>{this.props.data.commBox}</td>
	       	          <td style={STYLE}><Button onClick={()=>this.toCommDetail()}>查看基本信息</Button></td>
	       	          <td style={STYLE}><Button onClick={()=>this.toCommTodayInfo()}>查看展示信息</Button></td>
	       	          <td style={STYLE}><Button onClick={()=>this.toCommImages()}>查看商品图片</Button></td>
                   </tr>
		       </tbody>
		 
		    </table>
          </div>
		)
	}
} 