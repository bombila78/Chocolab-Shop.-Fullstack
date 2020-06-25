import goods from './goods'
import cart from './cart'
import login from './login'

const chocolab = (state, action) => {
    return {
        goods: goods(state, action),
        cart: cart(state, action),
        login: login(state, action)
    }
}

export default chocolab