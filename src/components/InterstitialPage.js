import React from 'react'
import Github from 'github-api'
import UserProfile from './UserProfile';
import {updateProfileData} from '../actions/profile'
import {updateReposData} from '../actions/repos'
import {connect} from 'react-redux'

class InterstitialPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userProfile: {},
            userRepos: {}
        }
    }
    componentDidMount() {
        const {username} = this.props.match.params
        const {updateProfileData, updateReposData} = this.props

        console.log('Props: ', this.props)

        var githubApi = new Github()

        if(username !== null && username !== '') {
            githubApi.getUser(username).getProfile()
                .then(({data}) => {
                    updateProfileData(data)
                    this.props.history.push(`/${username}/profile`)
                })
                .catch((e) => {
                    console.log('Fetched Failed.',e)
                    // this.props.history.push('/')
            })

            githubApi.getUser(username).listRepos()
                .then(({data}) => {
                    updateReposData(data)
                    this.props.history.push(`/${username}/profile`)
                })
                .catch((e) => {
                    console.log('Fetched Failed.',e)
                    // this.props.history.push('/')
            })

            
        }
    }
    render() {
        // console.log('DATA IS: ', this.state.userProfile)
        // console.log('DATA IS: ', this.state.userRepos)

        return(
            <div>
                InterstitialPage !
            </div>
        )
    }
}

export default connect(null, {updateProfileData, updateReposData})(InterstitialPage)