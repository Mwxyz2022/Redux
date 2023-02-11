import React from 'react'
import { connect } from 'react-redux'

import Pagination from './Pagination'
import User from './User'

import * as usersActions from './users.actions'

const UsersList = ({ users, currentPage, prevPage, nextPage }) => {
    const itemsPerPage = 3
    const pageNumber = currentPage + 1
    const startIndex = (pageNumber - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const renderUsers = users.slice(startIndex, endIndex)

    return (
        <div>
            <Pagination
                goPrev={prevPage}
                goNext={nextPage}
                totalItems={users.length}
                currentPage={pageNumber}
                itemsPerPage={itemsPerPage}
            />
            <ul className="users">
                {renderUsers.map(user => (
                    <User key={user.id} {...user} />
                ))}
            </ul>
        </div>
    )
}

const mapState = state => ({
    users: state.usersList,
    currentPage: state.currentPage,
})

const mapDispatch = {
    prevPage: usersActions.prevPage,
    nextPage: usersActions.nextPage,
}

const connector = connect(mapState, mapDispatch)

export default connector(UsersList)
