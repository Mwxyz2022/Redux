import React from 'react'
import Header from './Header'
import { userData, UserDateContext } from './userData-context.js'

class App extends React.Component {
    state = {
        UserData: userData,
    }

    render() {
        return (
            <div className="page">
                <UserDateContext.Provider value={this.state.UserData}>
                    <Header />
                </UserDateContext.Provider>
            </div>
        )
    }
}

export default App
