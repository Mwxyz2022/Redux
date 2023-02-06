import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions'

const initialState = {
    userList: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            return {
                ...state,
                userList: [...state.userList, action.payload.userData],
            }
        }
        case DELETE_USER: {
            const newList = state.userList.filter(user => user.id !== action.payload.userId)
            return {
                ...state,
                userList: newList,
            }
        }
        case UPDATE_USER: {
            const newList = state.userList.map(user => {
                if (user.id === action.payload.userId) {
                    return {
                        ...user,
                        ...action.payload.userData,
                    }
                }
                return user
            })

            return {
                ...state,
                userList: newList,
            }
        }
        default:
            return state
    }
}

export default usersReducer
