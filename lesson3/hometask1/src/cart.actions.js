export const ADD_PRODUCT = 'BASKET/ADD_BASKET'
export const DELETE_PRODUCT = 'BASKET/DELETE_BASKET'

export const addProduct = product => ({
    type: ADD_PRODUCT,
    payload: {
        product,
    },
})

export const removeProduct = prodId => ({
    type: DELETE_PRODUCT,
    payload: {
        prodId,
    },
})
