import { ADD, DELETE } from './users.reducer.js'

export const addUser = user => ({
    type: ADD,
    user,
})

export const deleteUser = id => ({
    type: DELETE,
    id,
})
