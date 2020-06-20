const updateOrder = (state, bookId, quantity) => {
    const {goodsList: {goods}, cartItems} = state;

    const good = goods.find((good) => good.id === bookId);
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(good, item, quantity);
    
    return {
        goodsList: {
            ...state.goodsList
        },
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    }
}

const updateCartItem = (good, item = {}, quantity) => {
    const {
        id = good.id,
         name = good.name + ' ' + good.info,
          count = 0,
           total = 0
        } = item;

    return {
        id,
        name,
        count: count + quantity,
        total: total + quantity*good.price
    }
}

const updateCartItems = (cartItems, item, idx) => {
    if(item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }
    if(idx === -1) {
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



const updateGoodList = (state, action) => {
    if (state === undefined) {
        return {
            goodsList: {
                goods: [],
                loading: true,
                error: null,
                filter: 'all',
            },
            cartItems: []
        }
    }
    switch (action.type) {
        case 'FETCH_GOODS_REQUEST':
            return {
                goodsList: {
                    goods: [],
                    loading: true,
                    error: null,
                    filter: 'all'
                },
                cartItems: [...state.cartItems]
            };
        case 'FETCH_GOODS_SUCCESS':
            return {
                goodsList: {
                    goods: action.payload,
                    loading: false,
                    error: null,
                    filter: 'all'
                },
                cartItems: [...state.cartItems]
            }
        case 'FETCH_GOODS_FAILURE':
            return {
                goodsList: {
                    goods: [],
                    loading: false,
                    error: action.payload,
                    filter: 'all'
                },
                cartItems: [...state.cartItems]
            }
        case 'FILTER_ALL': {
            return {
                goodsList: {
                    ...state.goodsList,
                    filter: 'all'
                },
                cartItems: [...state.cartItems]
            }
        }
        case 'FILTER_CHOCO': {
            return {
                goodsList: {
                    ...state.goodsList,
                    filter: 'choco'
                },
                cartItems: [...state.cartItems]
            }
        }
        case 'FILTER_INGRED': {
            return {
                goodsList: {
                    ...state.goodsList,
                    filter: 'ingred'
                },
                cartItems: [...state.cartItems]
            }
        }
        case 'FILTER_BOX': {
            return {
                goodsList: {
                    ...state.goodsList,
                    filter: 'box'
                },
                cartItems: [...state.cartItems]
            }
        }
        case 'ADD_TO_CART': 
           return updateOrder(state, action.payload, 1)
        case 'REMOVE_FROM_CART':
            return updateOrder(state, action.payload, -1)   
        case 'DELETE_FROM_CART': {
            const item = state.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count)
        }
        case 'CLEAR_CART':
            return {
                goodsList: {
                    ...state.goodsList
                },
                cartItems: []
            } 

        default:
            return state
    }
}

export default updateGoodList;