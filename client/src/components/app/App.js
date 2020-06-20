import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {ChocolabServiceProvider} from '../chocolab-service-context/chocolab-service-context';
import ChocolabService from '../../services/chocolab-service';

import './style.scss'
import HomePage from '../pages/homepage';
import GoodsListPage from '../pages/goodslist-page';
import CartPage from '../pages/cart-page';
import Admin from '../admin/admin'

export default class App extends React.Component {

   chocolabService = new ChocolabService()

   render(){
    return (
      <ChocolabServiceProvider value={this.chocolabService}>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/shop" component={GoodsListPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/admin" component={Admin} />
              <Route render={() => <h2>PAGE NOT FOUND</h2>} />
            </Switch>
          </div>         
        </Router>
      </ChocolabServiceProvider>
    )
   }

}

