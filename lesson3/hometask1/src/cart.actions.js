export const ADD_PRODUCT = 'PRODUCT/ADD_PRODUCT'
export const REMOVE_PRODUCT = 'PRODUCT/REMOVE_PRODUCT'

export const addProduct = product => ({
    type: ADD_PRODUCT,
    payload: {
        product,
    },
})

export const removeProduct = prodId => ({
    type: REMOVE_PRODUCT,
    payload: {
        prodId,
    },
})
