import {hashHistory} from 'react-router';
import { message } from 'antd';

export const COMM_PAGE_STATE = 'COMM_PAGE_STATE';
export const GET_COMMDITY_BY_TYPE = 'GET_COMMDITY_BY_TYPE';
export const SET_COMM_ATTR = 'SET_COMM_ATTR'


// console.log(store.getState())
//commodity页的状态管理
export function commodityState(state){
	return{
		type:COMM_PAGE_STATE,
		state
	}
}


export function onOpenChange(openKeys,state) {
      
	return dispatch => {
	    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
	    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

	    let nextOpenKeys = [];
	    if (latestOpenKey) {
	      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey);
	    }
	    if (latestCloseKey) {
	      nextOpenKeys = getAncestorKeys(latestCloseKey);
	    }
        dispatch(commodityState({ openKeys: nextOpenKeys }))
	  }
  }
//点击改变分类栏

function getAncestorKeys(key) {
	    const map = {
	      sub3: ['sub2'],
	    };
	    return map[key] || [];
	  }


export function CommodityHandleClick(e){
   
    	return dispatch=>{
    		if(e.key !== 'searchCommodity' && e.key !== 'todayCommodity'){
    			hashHistory.push(`/nav/commodity/${e.key}/${e.key}`)
    		}else{
    			hashHistory.push(`/nav/commodity/${e.key}`)
    		}
       	}
    }

//实现分类跳转
//
//
 
//6个系列的展示
//
 export function getCommodityByType(commodityData){
 	return {
 		type:GET_COMMDITY_BY_TYPE,
        	commodityData
 	}
 }

 export function getCommodity(type){
        return dispatch =>{
            switch(type) {
            	case 'business':
            		  type = '1';
            		  break;
                case 'relaxation':
            		  type = '2';
            		  break;
            	case 'sports':
            		  type = '3';
            		  break;
            	case 'xianqiao':
            		  type = '4';
            		  break;
            	case 'yayun':
            		  type = '5';
            		  break;
            	case 'perfume':
            		  type = '6';
            		  break;	  	  	  	  
            }

        	fetch("/commodity/getCommodity", {
				    method: "post",
				    headers: {
				        "Content-Type": "application/x-www-form-urlencoded"
				    },
				    body:`type=${type}`,
					credentials: 'include'
				}).then(function(response) {
				    return response.json();
				}).then((data)=>{
					dispatch(getCommodityByType(data))
				});
        }
    }

  export function toCommDetail(_id){
  	    return dispatch=>{
  	    	hashHistory.push(`nav/commodity/commDetail/${_id}`)
  	    }
  } 

  export function showPics(_id){
  	    return dispatch=>{
  	    	hashHistory.push(`nav/commodity/commImages/${_id}`)
  	    }
  } 



  //添加商品页面
  export function setCommAttr(value,attr) {
          var option = {};
          switch(attr) {
            	case 'commName':
            	      option.commName = value.target.value 
            		  return{
            		  	type:SET_COMM_ATTR,
            		  	option
            		  }
            	case 'module':
            		  option.module = value.target.value 
            		  return{
            		  	type:SET_COMM_ATTR,
            		  	option
            		  }	  
            	case 'watchCover':
            		  option.watchCover = value.target.value 
            		  return{
            		  	type:SET_COMM_ATTR,
            		  	option
            		  }
            	case 'mirrorFace':
            	      option.mirrorFace = value.target.value 
            		  return{
            		  	type:SET_COMM_ATTR,
            		  	option
            		  }
            	case 'headSize':
            	      option.headSize = value.target.value 
            		  return{
            		  	type:SET_COMM_ATTR,
            		  	option
            		  }
            	case 'watchBand':
            	      option.watchBand = value.target.value 
            		  return{
            		  	type:SET_COMM_ATTR,
            		  	option
            		  }
            	case 'bodySize':
            	      option.bodySize = value.target.value 
            		  return{
            		  	type:SET_COMM_ATTR,
            		  	option
            		  }
            	case 'waterDepth':
            	      option.waterDepth = value.target.value 
            		  return{
            		  	type:SET_COMM_ATTR,
            		  	option
            		  }
            	case 'color':
            	      option.color = value
            		  return{
            		  	type:SET_COMM_ATTR,
            		  	option
            		  }
            	case 'price':
            	      option.price = value.target.value 
            		  return{
            		  	type:SET_COMM_ATTR,
            		  	option
            		  }
            	case 'type':
            	      option.type = value
            		  return{
            		  	type:SET_COMM_ATTR,
            		  	option
            		  }
            	case 'commPicUpload':
            	      option.commPicUpload = value
            		  return{
            		  	type:SET_COMM_ATTR,
            		  	option
            		  }
            	case 'commId':
            	      option.commId = value
            		  return{
            		  	type:SET_COMM_ATTR,
            		  	option
            		  }	  	  
            	default:
            	      return{
            		  	type:SET_COMM_ATTR,
            		  	option
            		  }	  
            }
  	 
  }

//提交按钮
  export function addCommHandleSubmit(commInfo) {
  	  return dispatch=>{
		        fetch("/commodity/addCommodity", {
				    method: "post",
				    headers: {
				        "Content-Type": "application/x-www-form-urlencoded"
				    },
				    body:`commodity=${JSON.stringify(commInfo)}`,
					credentials: 'include'
				}).then(function(response) {
				    return response.json();
				}).then((data)=>{
					if(data){
                      message.success('添加成功，请上传商品图片！')

                      dispatch(setCommAttr(data._id,'commId'))
                      dispatch(setCommAttr(false,'commPicUpload'))
					}
				});
	  } 
  }