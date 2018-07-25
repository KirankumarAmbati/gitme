import {UPDATE_PROFILE_DATA} from '../actions/profile'

export function profile(state = {}, action) {
    switch (action.type) {
        case UPDATE_PROFILE_DATA:
            return {
                ...state,
                ...action.profileData
            }
        default:
            return state
    }
}