import {combineReducers} from 'redux';
import {COMM_PAGE_STATE,
        GET_COMMDITY_BY_TYPE,
        SET_COMM_ATTR } from './commodityAction.js';


function commodityState(state={
		      current: '1',
		      openKeys: [],
		      todayDate :[]
		    },action){	
    switch(action.type) {
    	case COMM_PAGE_STATE:
    		 return action.state 
    	default:
             return state;
    }
}//商品主界面处理器


function getCommodityByType(state=[],action){
      switch(action.type) {
      	case GET_COMMDITY_BY_TYPE:
      		 return action.commodityData
      	default:
      	     return state     	    	
      }
}
// 6系列商品渲染器



function addCommodity(state={
         commId:'',	
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
         commPicUpload:true},action){
	switch(action.type) {
      	case SET_COMM_ATTR:
      		 	var newState = {} 
      		 	for(var k in state){
                  newState[k] = state[k]
      		 	 }
      		 	return Object.assign(newState,action.option)

      	default:
      	     return state  
    }  	     
}

export default combineReducers({commodityState,getCommodityByType,addCommodity})