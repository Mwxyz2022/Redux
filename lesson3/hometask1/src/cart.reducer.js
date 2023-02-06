import { ADD_BASKET, DELETE_BASKET } from './cart.actions'

const initialState = {
    product: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BASKET: {
            return {
                ...state,
                product: [...state.product, action.payload.product],
            }
        }
        case DELETE_BASKET: {
            const newList = state.product.filter(product => product.id !== action.payload.prodId)
            return {
                ...state,
                productLis: newList,
            }
        }
        default:
            return state
    }
}
export default cartReducer
