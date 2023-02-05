import React from 'react'
import Header from './Header'
import { UserDateContext } from './userData-context.js'

class App extends React.Component {
    state = {
        userData: {
            name: 'Nikola Tesla',
            avatar_url: 'https://avatars3.githubusercontent.com/u10001',
        },
    }

    render() {
        return (
            <div className="page">
                <UserDateContext.Provider value={this.state.userData}>
                    <Header />
                </UserDateContext.Provider>
            </div>
        )
    }
}

export default App
