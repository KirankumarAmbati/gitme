import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading'
import {profile} from '../reducers/profile'
import {repos} from '../reducers/repos'

export default combineReducers({
    profile,
    repos,
    loadingBar:loadingBarReducer
})