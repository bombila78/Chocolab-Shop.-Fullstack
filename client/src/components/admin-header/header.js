import React from 'react';
import { Link } from 'react-router-dom';
import {logOut} from '../../actions';
import {connect} from 'react-redux'

const Header = ({logOut}) => {
   
    return (
        <div className="header">
            <nav className="navbar">
                <Link className="navbar-brand" to="/admin"><span>C</span>hoco<span>L</span>ab<span>A</span>dmin</Link>
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link className="nav-link" to="/">В магазин</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/admin">Добавление товара</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/admin/goods">Ассортимент</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/admin/orders">Заказы</Link>
                    </li>
                    <li className="navbar-item">
                        <button className="btn btn-danger" onClick={() => logOut()}>Выйти</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

const mapDispatchToProps = {
    logOut: logOut
}

const mapStateToProps = ({}) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);