import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="header">
            <nav className="navbar">
                <Link className="navbar-brand" to="/admin"><span>C</span>hoco<span>L</span>ab<span>A</span>dmin</Link>
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link className="nav-link" to="/admin">Добавление товара</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/admin/goods">Ассортимент</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/admin/orders">Заказы</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;