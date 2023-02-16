import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import tasksReducer from './tasks/tasks.reducer'

const reducer = combineReducers({
    tasks: tasksReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line no-underscore-dangle

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
