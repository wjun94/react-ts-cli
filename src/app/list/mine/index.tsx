import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component<any, {}> {

    render() {
        return (
            <div className='msg-edit animate app-container'>
                <p>我的</p>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return state
}

export default connect(mapStateToProps)(App)    