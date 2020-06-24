// const initialState = {
//     goodsList: {
//         goods: [],
//         loading: true,
//         error: null
//     } 
// }

const goods = (state, action) => {

    if (state.goods === undefined) {
        return {
            goodsList: {
                goods: [],
                loading: true,
                error: null
            } 
        }
    }
    switch (action.type) {
        case 'FETCH_GOODS_REQUEST':
            return {
                goodsList: {
                    goods: [],
                    loading: true,
                    error: null
                }
            };
        case 'FETCH_GOODS_SUCCESS':
            return {
                goodsList: {
                    goods: action.payload,
                    loading: false,
                    error: null
                }
            }
        case 'FETCH_GOODS_FAILURE':
            return {
                goodsList: {
                    goods: [],
                    loading: false,
                    error: action.payload
                }
            }

        default:
            return state.goods
    }
}

export default goods;