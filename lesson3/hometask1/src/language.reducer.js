export const LANGUAGE = 'CHANGE/LANGUAGE'

const languageReducer = (state = 'en', action) => {
    switch (action.type) {
        case LANGUAGE:
            return action.payload.language

        default:
            return state
    }
}
export default languageReducer
