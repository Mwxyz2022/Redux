import store from './store'

import setLanguage from './language.actions'
import { addProduct, removeProduct } from './cart.actions'
import { setUser, removeUser } from './user.actions'

///
store.dispatch(setLanguage('ua'))

store.dispatch(addProduct({ id: 12, name: 'milk' }))
store.dispatch(addProduct({ id: 14, name: 'pasta' }))
store.dispatch(addProduct({ id: 20, name: 'pepsi' }))
store.dispatch(addProduct({ id: 7, name: 'mars' }))
store.dispatch(addProduct({ id: 10, name: 'chips' }))
store.dispatch(addProduct({ id: 11, name: 'coffee' }))

store.dispatch(removeProduct(11))

store.dispatch(setLanguage('fr'))
store.dispatch(setUser({ name: 'Tom' }))
store.dispatch(removeUser())
store.dispatch(setUser({ name: 'Jack' }))

//
console.log(store.getState())
