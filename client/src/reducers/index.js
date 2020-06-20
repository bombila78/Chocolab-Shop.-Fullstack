import updateGoodList from './good-list-reducer';
import updateCart from './cart-reducer'


const reducer = (state, action) => {
    return {
        goodslist: updateGoodList(state, action)
    }
}

export default reducer;