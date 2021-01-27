import {combineReducers} from 'redux'
import auth from './auth'
import digital from './digital'

export default combineReducers({
    auth, digital
})