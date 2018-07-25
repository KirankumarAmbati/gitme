import React from 'react'

class UserInput extends React.Component {
    constructor(props) {
        super(props)
        this.fetchUser = this.fetchUser.bind(this)
    }

    fetchUser() {
        const username = this.input.value
        this.props.history.push(`/${username}`)
    }

    render() {
        return(
            <div>
                <input type='text'ref={(input) => this.input=input} />
                <button onClick={this.fetchUser}>Fetch Me</button>
            </div>
        )
    }
}

export default UserInput