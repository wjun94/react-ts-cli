import React from 'react'
import { RouteComponentProps } from 'react-router'
import store from '../../store/home/store.js'

export default class Home extends React.Component<RouteComponentProps, {}> {
    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }
    back = () => {
        this.props.history.goBack()
    }

    onSend = () => {
        store.dispatch({
            type: 'send_type',
            value: '测试成功'
        })
    }

    render() {
        return <div>
            <p>主页 {store.getState().value}</p>
            <button onClick={this.back}>返回</button>
            <button onClick={this.onSend}>传值</button>
        </div>
    }
} 
