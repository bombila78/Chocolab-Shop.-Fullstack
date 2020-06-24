import goods from './goods'
import cart from './cart'

const chocolab = (state, action) => {
    return {
        goods: goods(state, action),
        cart: cart(state, action)
    }
}

export default chocolab