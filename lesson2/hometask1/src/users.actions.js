import { ADD, DELETE } from './users.reducer.js'

export const addUser = user => ({
    type: ADD,
    payload: {
        user,
    },
})

export const deleteUser = id => ({
    type: DELETE,
    payload: {
        id,
    },
})
