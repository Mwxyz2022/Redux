import { createStore } from 'redux'

const INCREMENT = 'COUNTER/INCREMENT'
const DECREMENT = 'COUNTER/DECREMENT'
const RESET = 'COUNTER/RESET'

export const increment = () => ({
    type: INCREMENT,
})

export const decrement = () => ({
    type: DECREMENT,
})

export const reset = () => ({
    type: RESET,
})

const initialState = {
    result: 0,
    history: [],
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                result: state.result + 1,
                history: [...state.history, 1],
            }
        case DECREMENT:
            return {
                ...state,
                result: state.result - 1,
                history: [...state.history, -1],
            }
        case RESET:
            return {
                ...state,
                result: 0,
                history: [],
            }
        default:
            return state
    }
}

const store = createStore(counterReducer)

export default store
