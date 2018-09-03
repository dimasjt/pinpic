import * as React from 'react'
import { Router, Route } from 'react-router-dom'
import Alert from 'react-s-alert'

import HomeContainer from '@containers/HomeContainer'
import LoginContainer from '@containers/auth/LoginContainer'
import DashboardContainer from '@containers/dashboard/DashboardContainer'
import RegisterContainer from '@containers/auth/RegisterContainer'
import ScheduleContainer from '@containers/schedule/ScheduleContainer'
import ProfileContainer from '@containers/users/ProfileContainer'
import OAuthCallbackContainer from '@containers/auth/OAuthCallbackContainer'
import Navbar from '@components/layout/Navbar'
import PrivateRoute from "@components/auth/PrivateRoute"

import { withConsumer } from '@context/MainContext'
import { MainContextProps } from '@types'
import history from '@utils/history'

class Routes extends React.Component<MainContextProps> {
  state = {
    validated: false
  }

  componentDidMount = () => {
    this.props.validateToken()
      .then(() => this.setState({ validated: true }))
      .catch(() => this.setState({ validated: true }))

    this.checkFacebook()
  }

  checkFacebook = () => {
    FB.getLoginStatus(response => console.log(response))
  }

  render() {
    if (!this.state.validated) return null

    return (
      <Router history={history}>
        <div>
          <Navbar loggedIn={this.props.loggedIn} />

          <div className="container">
            <Route exact path="/" component={HomeContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/register" component={RegisterContainer} />
            <PrivateRoute path="/dashboard" component={DashboardContainer} />
            <PrivateRoute path="/schedule" component={ScheduleContainer} />
            <PrivateRoute path="/profile" component={ProfileContainer} />
            <Route exact path="/oauth/callback" component={OAuthCallbackContainer} />
          </div>

          <Alert stack={{ limit: 5, effect: 'scale', position: 'top-right', timeout: 5000 }} />
        </div>
      </Router>
    )
  }
}

export default withConsumer(Routes)
