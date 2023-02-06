import { ADD_BASKET, DELETE_BASKET } from './cart.reducer'

export const addProduct = product => ({
    type: ADD_BASKET,
    payload: {
        product,
    },
})

export const removeProduct = prodId => ({
    type: DELETE_BASKET,
    payload: {
        prodId,
    },
})
