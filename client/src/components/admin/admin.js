import React from 'react';
import Header from '../admin-header/header'
import './style.scss';
import AddGoodForm from '../add-good-form/add-good-form'
import GoodsList from '../admin-goods-list/goods-list'
import OrdersList from '../admin-orders-list/orders-list';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const Admin = ({loggedIn}) => {


    if (!loggedIn) {
      return <Redirect to="/login" />
    }
    return (
      <div className="admin-page">
        <Header />
        <Route path="/admin" component={AddGoodForm} exact/>
        <Route path="/admin/goods" component={GoodsList} />
        <Route path="/admin/orders" component={OrdersList} />
      </div>
    )
  }

  const mapStateToProps = ({login: {loggedIn}}) => {
    return {loggedIn}
} 
  
export default connect(mapStateToProps)(Admin);

