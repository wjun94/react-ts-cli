import React from 'react'
import { connect } from 'react-redux'
import { setData } from '@/store/details/active'
import type { P } from './data.d'

@(connect(
  (state: any) => {
    console.log(state.detailsReducer)
    return state.detailsReducer
  },
  (dispatch) => ({
    setData() {
      dispatch(setData() as any)
    },
  })
) as any)
class App extends React.Component<P, {}> {
  componentDidMount() {
    this.props.setData()
  }
  onTest = () => {
    this.props.setData()
  }
  render() {
    console.log(this.props.data)
    return (
      <div className="app-container">
        <p>redux异步操作</p>
        <p>redux值:${JSON.stringify(this.props.data)}</p>
        <button onClick={this.onTest}>test</button>
      </div>
    )
  }
}

export default App
