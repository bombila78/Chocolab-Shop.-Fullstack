const goodsRequested = () => {
    return {
        type: 'FETCH_GOODS_REQUEST'
    }
}

const goodsLoaded = (newGoods) => {
    return {
        type: 'FETCH_GOODS_SUCCESS',
        payload: newGoods
    }
}

const goodsError = (error) => {
    return {
        type: 'FETCH_GOODS_FAILURE',
        payload: error
    }
}

const filterAll = () => {
    return {
        type: 'FILTER_ALL'
    }
}

const filterChoco = () => {
    return {
        type: 'FILTER_CHOCO'
    }
}

const filterIngred = () => {
    return {
        type: 'FILTER_INGRED'
    }
}

const filterBox = () => {
    return {
        type: 'FILTER_BOX'
    }
}

const addToCart = (goodId) => {
    return {
        type: 'ADD_TO_CART',
        payload: goodId
    }
}

const removeFromCart = (goodId) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: goodId
    }
}

const deleteFromCart = (goodId) => {
    return {
        type: 'DELETE_FROM_CART',
        payload: goodId
    }
}

const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}




export {
    goodsRequested,
    goodsLoaded,
    goodsError,
    filterAll,
    filterChoco,
    filterIngred,
    filterBox,
    addToCart,
    removeFromCart,
    deleteFromCart,
    clearCart
}
