export const UPDATE_REPOS_DATA = 'UPDATE_REPOS_DATA'

export function updateReposData(reposData) {
    return {
        type: UPDATE_REPOS_DATA,
        reposData
    }
}