import React from 'react'

import PropTypes from 'prop-types'

const Task = ({ id, done, text, onChange, onDelete }) => (
    <li className={`list-item${done ? ' list-item_done' : ''}`}>
        <input
            type="checkbox"
            className="list-item__checkbox"
            defaultChecked={done}
            onChange={() => onChange(id)}
        />

        <span className="list-item__text">{text}</span>

        <button className="list-item__delete-btn" onClick={() => onDelete(id)} />
    </li>
)

Task.propTypes = {
    id: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default Task
