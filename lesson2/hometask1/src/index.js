import store from './store'
import { addUser, deleteUser } from './users.actions'

store.dispatch(addUser({ id: 1, name: 'Vlad' }))
store.dispatch(addUser({ id: 2, name: 'Stas' }))
store.dispatch(addUser({ id: 3, name: 'Nastia' }))
store.dispatch(addUser({ id: 4, name: 'Lesia' }))
store.dispatch(addUser({ id: 5, name: 'Victor' }))
store.dispatch(addUser({ id: 6, name: 'Jenya' }))
store.dispatch(addUser({ id: 7, name: 'Dmitry' }))
store.dispatch(addUser({ id: 8, name: 'Vadym' }))

store.dispatch(deleteUser(8))
store.dispatch(deleteUser(6))

const state = store.getState()
console.log(state)
