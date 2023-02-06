export const SET_USER = 'USER/SET'
export const REMOVE_USER = 'USER/REMOVE'

const userReducer = (state = null, action) => {
    switch (action.type) {
        case SET_USER: {
            return action.payload.user
        }
        case REMOVE_USER: {
            return null
        }
        default:
            return state
    }
}
export default userReducer
