import React from 'react';
import GoodsListItem from '../admin-goods-list-item/admin-goods-list-item'

export default class GoodsList extends React.Component {

    state = {
        goods: []
    }

    componentDidMount = () => {
        fetch('/api/chocolab', {
            method: 'get'
        })
        .then((res) => res.json())
        .then((goods) => this.setState({goods}))
        .catch((err) => console.log(err))

    }

    removeGood = (id) => {
        const {goods} = this.state
        fetch('/api/chocolab/goods/' + id, {
            method: 'delete'
        })
        .then(() => {
            const newGoods = goods.filter(g => g.id !== id);
            this.setState({
                goods: newGoods
            })
        })
        .catch((e) => console.log(e))
    }

    render() {

        const {goods} = this.state;

        const allGoods = goods.map(good => {
            const {id} = good;
            return <li key={id}><GoodsListItem good={good} removeGood={() => this.removeGood(id)} /></li>
        })

        return (
            <div className="goods-list">
                <h2>АССОРТИМЕНТ</h2>
                <ul className="goodslist__list">
                {allGoods} 
                </ul>
            </div>
        )
    }
}