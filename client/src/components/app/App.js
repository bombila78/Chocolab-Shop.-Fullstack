import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './style.scss'
import HomePage from '../pages/homepage';
import GoodsListPage from '../pages/goodslist-page';
import CartPage from '../pages/cart-page';
import Admin from '../admin/admin'
import LoginPage from '../login-page/login-page';

export default class App extends React.Component {


   render(){
    return (

        <Router>
          <div className="App">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/login" component={LoginPage}/>
              <Route path="/shop" component={GoodsListPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/admin" component={Admin} />
              <Route render={() => <h2>PAGE NOT FOUND</h2>} />
            </Switch>
          </div>         
        </Router>
    )
   }

}

