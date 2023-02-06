import { ADD_PRODUCT, DELETE_PRODUCT } from './cart.actions'

const initialState = {
    products: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                products: [...state.products, action.payload.product],
            }
        }
        case DELETE_PRODUCT: {
            const newList = state.products.filter(user => user.id !== action.payload.productId)
            return {
                ...state,
                products: newList,
            }
        }
        default:
            return state
    }
}

export default cartReducer
