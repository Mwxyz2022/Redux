export const LANGUAGE = 'CHANGE/LANGUAGE'

export const setLanguage = language => ({
    type: LANGUAGE,
    payload: {
        language,
    },
})
