import {UPDATE_REPOS_DATA} from '../actions/repos'

export function repos(state = [], action) {
    switch (action.type) {
        case UPDATE_REPOS_DATA:
            return [
                ...state,
                ...action.reposData
            ]
        default:
            return state
    }
}