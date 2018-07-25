import React from 'react'
import {connect} from 'react-redux'

// import {Redirect} from 'react-router-dom'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const {profileData, reposData} = this.props

        console.log('p', reposData)

        if(Object.keys(profileData).length === 0 || reposData.length === 0) {
            console.log('jhjnk')
            this.props.history.push('/kirankumarAmbati')
        }

        const {avatar_url, name, bio, blog, company, email, followers, followers_url, following, following_url, gists_url, hireable,
            id, location, html_url, organizations_url, public_repos, repos_url, starred_url, subscriptions_url} = profileData


        return(
            <div>
                <div>
                    <img
                        src={avatar_url}
                        alt={`Avatar of ${name}`}
                        style={{float:'left', width:'200px',height:'200px'}}
                    />
                    <div>
                        <p>Name: {name}</p>
                        {email && <p>Email: {email}</p>}
                        <p>Location: {location}</p>
                        <p>Hireable: {hireable === true ? 'true' : 'false'}</p>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({profile, repos}) {
    return {
        profileData: profile,
        reposData: repos
    }
}

export default connect(mapStateToProps)(UserProfile)