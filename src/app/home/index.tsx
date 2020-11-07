import React from 'react'

export default function Login(props: any) {
    console.log(props)
    function back() {
        props.history.goBack()
    }
    return (
        <div>
            <p>主页</p>
            <button onClick={back}>返回</button>
        </div>
    )
}