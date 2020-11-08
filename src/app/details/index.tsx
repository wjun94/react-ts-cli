import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component<{ sendAction: Function }, {}> {
    onTest = () => {
        this.props.sendAction('发送数据')
    }
    render() {
        return (
            <div>
                <p>详情页</p>
                <button onClick={this.onTest}>test</button>
            </div>
        )
    }
}

/**
 * 这个函数要有返回一个对象
 * @param {*} dispath
 */
const mapDispatchProps = (dispatch: Function) => {
    return {
        sendAction: (value: string) => {
            dispatch({
                type: 'add_action',
                value
            })
        }
    }
}

export default connect(null, mapDispatchProps)(App)