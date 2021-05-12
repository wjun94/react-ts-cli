import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import homeReducer from './home/reducer'
import detailsReducer from './home/reducer'

export default createStore(
  combineReducers({
    ...homeReducer,
    ...detailsReducer,
  }),
  applyMiddleware(thunk)
)
