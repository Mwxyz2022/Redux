const baseUrl = 'https://api.github.com/users'

const getUserData = userName =>
    fetch(`${baseUrl}/${userName}`).then(responce => {
        if (responce.ok) {
            return responce.json()
        }
        throw new Error()
    })

export default getUserData
