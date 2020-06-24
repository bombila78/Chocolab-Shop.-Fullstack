import React from 'react';

const GoodsListItem = ({ good, removeGood }) => {

    const { name, price, imageURL } = good;

    const toCurrency = price => { //функция для форматирования в валюту
        return new Intl.NumberFormat('ru-RU', {
            currency: 'rub',
            style: 'currency'
        }).format(price)
    }

    return (
        <div className="col-md-4">
            <div className="admin-goodlistitem__card">
            <div className="admin-goodlistitem__card_image">
                    <img src={imageURL} alt="choco" />
                </div>
                <div className="admin-goodlistitem__card_info">
                    <p><span>Товар -</span> {name}</p>
                    <p><span>Цена -</span> {toCurrency(price)}</p>
                    <button className="btn btn-danger" onClick={removeGood}>Удалить</button>
                </div>
            </div>
        </div>
    )
}

export default GoodsListItem;