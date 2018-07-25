import React, { Component, Fragment } from 'react'
import './App.css'
import UserInput from './components/UserInput'
import UserProfile from './components/UserProfile'
import UserRepos from './components/UserRepos'
import InterstitialPage from './components/InterstitialPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path='/' exact component={UserInput} />
          <Route path='/:username' exact component={InterstitialPage} />
          <Route path='/:username/profile' exact component={UserProfile} />
          <Route path='/:username/repos' exact component={UserRepos} />
        </Fragment>
      </Router>
    )
  }
}

export default App
