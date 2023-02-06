import { LANGUAGE } from './language.reducer'

const setLanguage = language => ({
    type: LANGUAGE,
    payload: {
        language,
    },
})

export default setLanguage
