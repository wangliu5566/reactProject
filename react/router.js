import React from 'react';
import ReactDOM from 'react-dom';
import {message,Modal} from 'antd';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { createStore,applyMiddleware,combineReducers} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'

import '../index.less';
import './index.css'

import Nav from './nav.js';
import Commodity from './commodity/commodity.js';

import Business from './commodity/business/business.js';
import Perfume from './commodity/perfume/perfume.js';
import Relaxation from './commodity/relaxation/relaxation.js';
import Sports from './commodity/sports/sports.js';
import Xianqiao from './commodity/xianqiao/xianqiao.js';
import Yayun from './commodity/yayun/yayun.js';
import AddCommodity from './commodity/addCommodity/addCommodity.js';
import SearchCommodity from './commodity/searchCommodity/searchCommodity.js';



import CommDetail from './commodity/commDetail/commDetail.js'
import CommImages from './commodity/commImages/commImages.js'
import TodayCommodity from './commodity/todayCommodity/todayCommodity.js'
import TodayCommInfo from './commodity/todayCommodity/todayCommInfo.js'
import UpdateTodayInfo from './commodity/todayCommodity/updateTodayInfo.js'

import OrderForm from './orderForm/orderForm.js';
import GetOrderForm from './orderForm/orderFormQuery/getOrderForm.js';
import AddOrderForm from './orderForm/orderFormQuery/addOrderForm.js';
import ModifyOrder from './orderForm/orderFormQuery/modifyOrder.js';
import OrderFormQuery from './orderForm/orderFormQuery/orderFormQuery.js';
import OrderFormAll from './orderForm/orderFormAll/orderFormAll.js';

import Login from './login.js';
import Reg from './reg.js';
import Users from './users/users.js'
import UserList from './users/userList/userList.js'
import Inquire from './users/inquire/inquire.js'
import AdmLogin from './admin/admLogin.js'
import AdmReg from './admin/admReg.js';
import Updata from './users/updata/updata.js'


import Shopper from './shopper/shopper.js';
import AddShoppingCart from './shopper/addShoppingCart.js';
import SeeShopping from './shopper/seeShopping.js';
import GetShoppingCart from './shopper/getShoppingCart.js';
import SearchShoppingCart from './shopper/searchShoppingCart.js';
import UpDateShoppingCart from './shopper/upDateShoppingCart.js';




var isAdminLogin=function(){
  fetch("/users/isAdminLogin",{
      method: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      credentials: 'include'
  }).then(function(response) {
      return response.json();
  }).then((data) => {
    if(!data){
      Modal.info({
        title: '提示',
        content: (
          <div>
            <p>您还未登陆，请先登陆！</p>
          </div>
        ),
        onOk() {},
      });
      hashHistory.push("/admLogin");
    }else{
      hashHistory.push("/nav");
    }
  });
}


import commodityState from './commodityReducer.js'

var logger = createLogger()
var store = createStore(
  commodityState,
  applyMiddleware(thunk,logger)
  )



ReactDOM.render((
   <Provider store={store}>
       <Router history={hashHistory}>
         <Route path='/' component={Nav} onEnter={() => {isAdminLogin() }}>
            <IndexRoute component={Commodity} />
         </Route>
         <Route path='/nav' component={Nav} >
            <IndexRoute component={Commodity} />
            <Route path='/nav/commodity' component={Commodity}>
               <Route path='/nav/commodity/business/:pageName' component={Business}></Route>
               <Route path='/nav/commodity/perfume/:pageName' component={Perfume}></Route>
               <Route path='/nav/commodity/relaxation/:pageName' component={Relaxation}></Route>
               <Route path='/nav/commodity/sports/:pageName' component={Sports}></Route>
               <Route path='/nav/commodity/xianqiao/:pageName' component={Xianqiao}></Route>
               <Route path='/nav/commodity/yayun/:pageName' component={Yayun}></Route>
               <Route path='/nav/commodity/addCommodity/:pageName' component={AddCommodity}></Route>
               <Route path='/nav/commodity/searchCommodity' component={SearchCommodity}></Route>
               <Route path='/nav/commodity/todayCommodity' component={TodayCommodity}></Route>
               <Route path='/nav/commodity/todayCommInfo/:commId' component={TodayCommInfo}></Route>
               <Route path='/nav/commodity/commDetail/:commId' component={CommDetail}></Route>
               <Route path='/nav/commodity/commImages/:commId' component={CommImages}></Route>
               <Route path='/nav/commodity/updateTodayInfo/:commId' component={UpdateTodayInfo}></Route>
            </Route>


            <Route path='/nav/orderForm' component={ OrderForm }>
              <Route path='/nav/orderForm/getOrderForm' component={ GetOrderForm }></Route>
              <Route path='/nav/orderForm/orderFormAll' component={ OrderFormAll }></Route>
              <Route path='/nav/orderForm/addOrderForm/:commId' component={ AddOrderForm }></Route>
              <Route path='/nav/orderForm/orderFormQuery/:_id' component={ OrderFormQuery }></Route>
              <Route path='/nav/orderForm/modifyOrder/:_id' component={ ModifyOrder }></Route>
            </Route>

          <Route path='/nav/users' component={Users}>
            <Route path='/nav/users/userList' component={UserList}></Route>
            <Route path='/nav/users/inquire' component={Inquire}></Route>
            <Route path='/nav/users/updata/:_id' component={Updata}></Route>
          </Route>


            <Route path='/nav/shopper' component={Shopper}>
                <Route path='/nav/shopper/getShoppingCart' component={GetShoppingCart}></Route>
                <Route path='/nav/Shopper/searchShoppingCart' component={SearchShoppingCart}></Route>
                <Route path='/nav/shopper/addShoppingCart/:_id' component={AddShoppingCart}></Route>
                <Route path='/nav/shopper/seeShopping/:_id' component={SeeShopping}></Route>
                <Route path='/nav/Shopper/upDateShoppingCart/:_id' component={UpDateShoppingCart}></Route>
            </Route>
       </Route>
       <Route path='/login' component={Login}></Route>
       <Route path='/reg' component={Reg}></Route>
       <Route path="/admLogin" component={AdmLogin} />
       <Route path='/admReg' component={AdmReg}></Route>
     </Router>
    </Provider>
	), app)
