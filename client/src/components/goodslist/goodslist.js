import React from 'react';
import GoodsListItem from '../goods-list-item/goods-list-item';
import { withChocolabService } from '../hoc/with-chocolab-service';
import { compose } from '../../utils'
import { connect } from 'react-redux';
import { goodsRequested, goodsLoaded, goodsError, addToCart } from '../../actions';
import { bindActionCreators } from 'redux';

class GoodsList extends React.Component {

    state = {
        filter: 'all'
    }

    componentDidMount() {
        const { goodsRequested, goodsLoaded, goodsError } = this.props
        goodsRequested();
        fetch('/api/categories/all', {
            method: 'get'
        })
            .then((res) => res.json())
            .then((data) => {
                goodsLoaded(data)
            })
            .catch((err) => goodsError(err))

    }

    changeFilter = (title) => {
        this.setState({ filter: title })
    }

    render() {

        const { categoriesAndGoods, loading, error, addToCart } = this.props;

        const categoriesButtonsGroup = categoriesAndGoods.map(categ => {
            const { title } = categ;

            return <button className="goodlist_button" onClick={() => this.changeFilter(title)}>{title}</button>

        })

        let filteredCats = [];

        const {filter} = this.state

        if (filter === 'all') {
            filteredCats = [...categoriesAndGoods]
        } else {
            filteredCats = categoriesAndGoods.filter(c => c.title === filter)
        }

        const allCatsAndGoods = filteredCats.map(category => {
            
            const { title, Goods } = category;

            const allGoodsOfCat = Goods.map(good => {
                const { id } = good;
                return <GoodsListItem  good={good} addToCart={() => addToCart(id)} />
            })

            return (
                <div key={title} className="goodlist_category">
                    <div className="row justify-content-center">
                    <h3>{title}</h3>
                    </div>
                    <div className="row">
                        {allGoodsOfCat}
                    </div>
                </div>
            )
        })

        if (loading) {
            return <div>LOADING...........</div>
        }

        if (error) {
            return <div>ERROR!!!</div>
        }

        return (
            <div className="goodlist">
                <div className="container">
                <h2>КАТАЛОГ</h2>
                    <div className="goodlist__buttonGroup">
                        <button className="goodlist_button" onClick={() => this.changeFilter('all')}>Показать все</button>
                        {categoriesButtonsGroup}
                    </div>
                        {allCatsAndGoods}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ goods: { goodsList: {goods, loading, error}} }) => {
    return { categoriesAndGoods: goods, loading, error }
};

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({ goodsRequested, goodsLoaded, goodsError, addToCart }, dispatch)
}



export default compose(withChocolabService(),
    connect(mapStateToProps, mapDispatchToProps))
    (GoodsList)

