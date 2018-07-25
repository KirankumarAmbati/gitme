export const UPDATE_PROFILE_DATA = 'UPDATE_PROFILE_DATA'

export function updateProfileData(profileData) {
    return {
        type: UPDATE_PROFILE_DATA,
        profileData
    }
}