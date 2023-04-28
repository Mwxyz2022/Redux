import React from 'react'
import { connect } from 'react-redux'

import * as counterAction from '../counter.actions'

const Counter = ({ counter, increment, decrement, reset }) => (
    <div className="counter">
        <span className="title" onClick={reset}>
            {counter}
        </span>
        <div className="container">
            <button className="btn btn-increment" onClick={increment}>
                +
            </button>
            <button className="btn btn-decrement" onClick={decrement}>
                -
            </button>
        </div>
    </div>
)

const mapState = state => ({
    counter: state,
})

const mapDispatch = {
    increment: counterAction.increment,
    decrement: counterAction.decrement,
    reset: counterAction.reset,
}

const connector = connect(mapState, mapDispatch) // HOC

export default connector(Counter)
