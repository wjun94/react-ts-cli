import {
    createStore
} from 'redux'
import {
    loverReducer
} from './reducer'

export default createStore(loverReducer)