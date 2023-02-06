export const ADD = 'USER/ADD'
export const DELETE = 'USER/DELETE'

const initialState = {
    usersList: [],
}

export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                usersList: [...state.usersList, action.payload.user],
            }
        case DELETE:
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id !== action.payload.id),
            }
        default:
            return state
    }
}
