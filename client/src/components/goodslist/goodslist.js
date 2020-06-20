import React from 'react';
import GoodsListItem from '../goods-list-item/goods-list-item';
import { withChocolabService } from '../hoc/with-chocolab-service';
import { compose } from '../../utils'
import { connect } from 'react-redux';
import { goodsRequested, goodsLoaded, goodsError, filterAll, filterChoco, filterIngred, filterBox, addToCart } from '../../actions';
import { bindActionCreators } from 'redux';

const chosenBut = "goodlist__buttonGroup_button chosen"
const notChosenBut = "goodlist__buttonGroup_button"
let allClass
let chocoClass
let ingredClass
let boxClass
let chocoHidden
let ingredHidden
let boxHidden

class GoodsList extends React.Component {

    componentDidMount() {
        const { goodsRequested, goodsLoaded, goodsError, chocolabService } = this.props
        goodsRequested();
        fetch('/api/chocolab/', {
            method: 'get'
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                goodsLoaded(data)
            })
            .catch((err) => goodsError(err))

    }

    render() {

        const { goods, loading, error, filter, filterAll, filterChoco, filterIngred, filterBox, addToCart } = this.props;

        if (filter === 'all') {
            allClass = chosenBut
            chocoClass = notChosenBut
            ingredClass = notChosenBut
            boxClass = notChosenBut
            chocoHidden = false
            ingredHidden = false
            boxHidden = false
        } else if (filter === 'choco') {
            allClass = notChosenBut
            chocoClass = chosenBut
            ingredClass = notChosenBut
            boxClass = notChosenBut
            chocoHidden = false
            ingredHidden = true
            boxHidden = true
        } else if (filter === 'ingred') {
            allClass = notChosenBut
            chocoClass = notChosenBut
            ingredClass = chosenBut
            boxClass = notChosenBut
            chocoHidden = true
            ingredHidden = false
            boxHidden = true
        } else if (filter === 'box') {
            allClass = notChosenBut
            chocoClass = notChosenBut
            ingredClass = notChosenBut
            boxClass = chosenBut
            chocoHidden = true
            ingredHidden = true
            boxHidden = false
        }

        const chocoElems = goods.map((good) => {
            const { id, kind } = good;
            if (kind === "choco") {
                return <li key={id}><GoodsListItem good={good} addToCart={() => addToCart(id)} /></li>
            }

        })

        const ingredElems = goods.map((good) => {
            const { id, kind } = good;
            if (kind === "ingred") {
                return <li key={id}><GoodsListItem good={good} addToCart={() => addToCart(id)} /></li>
            }

        })

        const boxElems = goods.map((good) => {
            const { id, kind } = good;
            if (kind === "box") {
                return <li key={id}><GoodsListItem good={good} addToCart={() => addToCart(id)} /></li>
            }

        })



        if (loading) {
            return <div>LOADING...........</div>
        }

        if (error) {
            return <div>ERROR!!!</div>
        }

        return (
            <div className="goodlist">
                <div className="goodlist__buttonGroup">
                    <button className={allClass} onClick={filterAll}>ВСЕ ТОВАРЫ</button>
                    <button className={chocoClass} onClick={filterChoco}>ШОКОЛАД</button>
                    <button className={ingredClass} onClick={filterIngred}>ИНГРЕДИЕНТЫ</button>
                    <button className={boxClass} onClick={filterBox}>ФОРМЫ</button>
                </div>
                <div className="goodList__choco" hidden={chocoHidden}>
                    <h2>ШОКОЛАД</h2>
                    <ul className="goodlist__list">
                        {chocoElems}
                    </ul>
                </div>
                <div className="goodList__ingred" hidden={ingredHidden}>
                    <h2>ИНГРЕДИЕНТЫ</h2>
                    <ul className="goodlist__list">
                        {ingredElems}
                    </ul>
                </div>
                <div className="goodList__box" hidden={boxHidden}>
                    <h2>ФОРМЫ</h2>
                    <ul className="goodlist__list">
                        {boxElems}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ goodsList: { goods, loading, error, filter } }) => {
    return { goods, loading, error, filter }
};

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({ goodsRequested, goodsLoaded, goodsError, filterAll, filterChoco, filterIngred, filterBox, addToCart }, dispatch)
}



export default compose(withChocolabService(),
    connect(mapStateToProps, mapDispatchToProps))
    (GoodsList)

