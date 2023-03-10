import React from 'react'
import { Provider } from 'react-redux'
import Users from './users/User'
import store from './store'

const App = () => (
    <Provider store={store}>
        <Users />
    </Provider>
)

export default App
