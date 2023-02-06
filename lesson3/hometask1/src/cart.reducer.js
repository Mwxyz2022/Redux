export const ADD_BASKET = 'BASKET/ADD_BASKET'
export const DELETE_BASKET = 'BASKET/DELETE_BASKET'

const initialState = {
    product: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BASKET: {
            return {
                product: [...state.product, action.payload.product],
            }
        }
        case DELETE_BASKET: {
            return {
                productLis: state.product.filter(product => product.id !== action.payload.prodId),
            }
        }
        default:
            return state
    }
}
export default cartReducer
