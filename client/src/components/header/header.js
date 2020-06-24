import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

const Header = ({cartItems}) => {

    const total = (cartItems) => {
        let number = 0
        let sum = 0;
        for(let good of cartItems) {
            number += good.count
            sum += good.total
        }
        const string = number + ' товаров, на сумму ' + sum + ' рублей'
        return string
    }
    return (
        <div className="header">
            <nav className="navbar">
                <Link className="navbar-brand" to="/"><span>C</span>hoco<span>L</span>ab</Link>
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link className="nav-link" to="/">Главная</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/shop">Магазин</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/cart">Корзина</Link>
                    </li>
                </ul>
                
                <div className="navbar__cart">
               <Link to="/cart">
               <i className="fa fa-shopping-cart" />
                {total(cartItems)}
               </Link> 
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = ({cart: {cartItems}}) => {
    return {cartItems}
}

export default connect(mapStateToProps)(Header) ;