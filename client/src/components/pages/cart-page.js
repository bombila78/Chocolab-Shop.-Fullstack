import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addToCart, removeFromCart, deleteFromCart, clearCart } from '../../actions'
import Header from '../header/header';
import Footer from '../footer/footer';


const CartPage = ({ cartItems, onIncrease, onDecrease, onDelete, onClear }) => {

    const [phone, setPhone] = React.useState('');
    const [name, setName] = React.useState('');

    const onNameChange = event => setName(event.target.value);
    const onPhoneChange = event => setPhone(event.target.value);

    const total = (cartItems) => {
        let sum = 0;
        for (let good of cartItems) {
            sum += good.total
        }
        return sum
    }

    const submitOrder = () => {
        const order = {
            cartItems,
            name,
            phone
        }

        axios
            .post('/api/orders', order)
            .catch(e => console.log(e));

        setName('');
        setPhone('');
        onClear();
    }

    const renderRow = (item, idx) => {
        const { id, name, count, total } = item
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>{total}</td>
                <td className="cartpage__buttonGroup">
                    <button
                        className="btn btn-outline-success btn-sm float-left" onClick={() => onIncrease(id)}>
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        className="btn btn-outline-warning btn-sm float-left" onClick={() => onDecrease(id)}>
                        <i className="fa fa-minus-circle" />
                    </button>
                    <button
                        className="btn btn-outline-danger btn-sm float-left" onClick={() => onDelete(id)}>
                        <i className="fa fa-trash-o" />
                    </button>
                </td>
            </tr>
        )
    }

    return (
        <React.Fragment>
            <Header />
            <div className="cartpage">
            <div className="container">
                <h2>ВАШ ЗАКАЗ</h2>
                <table className="cartpage__table table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Товар</th>
                            <th>Количество</th>
                            <th>Цена</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(renderRow)}
                    </tbody>
                </table>
                    <div className="cartpage__total">
                        Общая стоимость: {total(cartItems)} рублей
                    </div>
                <div className="cartpage__submit">
                    <form className="cartpage__submit_form" onSubmit={submitOrder}>
                        <p>Ваши данные</p>
                        <div className="form-group">
                            <label htmlFor="clientName">Имя</label>
                            <input type="text" className="form-control form-control-sm" id="clientName" name="clientName" placeholder="Имя" value={name} onChange={onNameChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Номер телефона</label>
                            <input type="tel" className="form-control form-control-sm" id="phone" name="phone" placeholder="Телефон" value={phone} onChange={onPhoneChange} required />
                        </div>
                        <button className="btn btn-success" type="submit">Оформить заказ</button>
                    </form>
                    <div className="cartpage__submit_clear">
                    <button className="btn btn-danger clear" onClick={onClear}>Очистить корзину</button>
                    </div>
                    
                </div>
            </div>
        </div>
            <Footer />
        </React.Fragment>
 
    )
}

const mapStateToProps = ({ cart: { cartItems }}) => {
    return { cartItems }
}

const mapDispatchToProps = {
    onIncrease: addToCart,
    onDecrease: removeFromCart,
    onDelete: deleteFromCart,
    onClear: clearCart
}


export default connect(mapStateToProps, mapDispatchToProps)(CartPage);