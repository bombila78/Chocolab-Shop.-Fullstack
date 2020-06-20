import React from 'react';
import Header from '../admin-header/header'
import './style.scss';
import AddGoodForm from '../add-good-form/add-good-form'
import GoodsList from '../admin-goods-list/goods-list'
import OrdersList from '../admin-orders-list/orders-list';
import { Route } from 'react-router-dom';

export default class Admin extends React.Component  {

  render() {
    return (
      <div className="admin-page">
        <Header />
        <Route path="/admin" component={AddGoodForm} exact/>
        <Route path="/admin/goods" component={GoodsList} />
        <Route path="/admin/orders" component={OrdersList} />
      </div>
    )
  }
  
}

