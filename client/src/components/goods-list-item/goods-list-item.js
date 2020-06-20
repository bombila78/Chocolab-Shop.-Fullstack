import React from 'react'


const GoodsListItem = ({good, addToCart}) => {
    const {name, info, price, imageURL} = good

    return (
        <div className="goodlistitem">
            <div className="container">
                <div className="goodlistitem__card row justify-content-around">
                    <div className="goodlistitem__card_info">
                        <p><span>Товар -</span> {name}</p>
                        <p><span>Название -</span> {info}</p>
                        <p><span>Цена -</span> {price} руб.</p>
                        <button className="goodlistitem__card_button" onClick={addToCart}>В КОРЗИНУ</button>
                    </div>
                    <div className="goodlistitem__card_image">
                        <img src={imageURL} alt="choco" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default GoodsListItem;