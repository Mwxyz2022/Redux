import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Task from './Task'

import CreateTaskInput from './CreateTaskInput'

import { sortedTasksListSelectors } from '../tasks.selectors'

import * as tasksActions from '../tasks.actions'

class TasksList extends Component {
    componentDidMount() {
        this.props.getTaskList()
    }

    render() {
        return (
            <main className="todo-list">
                <CreateTaskInput onCreate={this.props.createTask} />

                <ul className="list">
                    {this.props.tasks.map(task => (
                        <Task
                            key={task.id}
                            {...task}
                            onChange={() => this.props.updatedTask(task.id)}
                            onDelete={() => this.props.deleteTask(task.id)}
                        />
                    ))}
                </ul>
            </main>
        )
    }
}

TasksList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    getTaskList: PropTypes.func.isRequired,
    updatedTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
}

const mapDispatch = {
    getTaskList: tasksActions.getTaskList,
    updatedTask: tasksActions.updatedTask,
    deleteTask: tasksActions.deleteTask,
    createTask: tasksActions.createTask,
}

const mapState = state => ({
    tasks: sortedTasksListSelectors(state),
})

export default connect(mapState, mapDispatch)(TasksList)
