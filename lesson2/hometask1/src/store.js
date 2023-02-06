import { createStore } from 'redux'
import { listReducer } from './users.reducer'

const store = createStore(listReducer)

export default store
