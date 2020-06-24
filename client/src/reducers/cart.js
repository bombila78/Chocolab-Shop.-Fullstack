const updateOrder = (state, bookId, quantity) => {
    const { goods: {goodsList: { goods }} , cart : {cartItems} } = state;
    const goodsArray = [];
    for (let cat of goods) {
        const { Goods } = cat;
        goodsArray.push(...Goods)
    }
    const good = goodsArray.find((good) => good.id === bookId);
    const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(good, item, quantity);

    return {    
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    }
}

const updateCartItem = (good, item = {}, quantity) => {
    const {
        id = good.id,
        name = good.name,
        count = 0,
        total = 0
    } = item;

    return {
        id,
        name,
        count: count + quantity,
        total: total + quantity * good.price
    }
}

const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}



const cart = (state, action) => {

    if (state === undefined) {
        return {
            cartItems: []
        }
    }  
    switch(action.type) {
        case 'ADD_TO_CART':
            return updateOrder(state, action.payload, 1)
        case 'REMOVE_FROM_CART':
            return updateOrder(state, action.payload, -1)
        case 'DELETE_FROM_CART': {
            const item = state.cart.cartItems.find(({ id }) => id === action.payload);
            return updateOrder(state, action.payload, -item.count)
        }
        case 'CLEAR_CART':
            return {
                cartItems: []
            }

        default:
            return state.cart
    }
}

export default cart;
