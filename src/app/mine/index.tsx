import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component<{ value: string }, {}> {

    render() {
        return (
            <div>
                <p>我的</p>
                <p>redux值：{this.props.value}</p>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return state
}

export default connect(mapStateToProps)(App)