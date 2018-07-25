import React from 'react'

class UserRepos extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props.match.params)
    }
    render() {
        return(
            <div>
                Hello Reposs !
            </div>
        )
    }
}

export default UserRepos