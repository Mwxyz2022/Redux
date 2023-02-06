export const ADD_BASKET = 'BASKET/ADD_BASKET'
export const DELETE_BASKET = 'BASKET/DELETE_BASKET'

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
