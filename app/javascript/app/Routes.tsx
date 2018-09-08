import * as React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Alert from 'react-s-alert'

import HomeContainer from '@containers/HomeContainer'
import LoginContainer from '@containers/auth/LoginContainer'
import DashboardContainer from '@containers/dashboard/DashboardContainer'
import RegisterContainer from '@containers/auth/RegisterContainer'
import OAuthCallbackContainer from '@containers/auth/OAuthCallbackContainer'
import SearchContainer from '@containers/search/SearchContainer'
import PlaceShowContainer from '@containers/places/PlaceShowContainer'
import PlaceNewContainer from '@containers/places/PlaceNewContainer'

import Footer from '@components/layout/Footer'
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
  }

  render() {
    if (!this.state.validated) return null

    return (
      <Router history={history}>
        <div>
          <Navbar loggedIn={this.props.loggedIn} />

          <div style={{ paddingTop: 80 }}>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/login" component={LoginContainer} />
              <Route path="/register" component={RegisterContainer} />
              <PrivateRoute path="/dashboard" component={DashboardContainer} />
              <Route exact path="/oauth/callback" component={OAuthCallbackContainer} />
              <Route path="/search" component={SearchContainer} />
              <PrivateRoute path="/places/new" component={PlaceNewContainer} />
              <Route path="/places/:id" component={PlaceShowContainer} />
            </Switch>
          </div>

          <Footer />
          <Alert stack={{ limit: 5, effect: 'scale', position: 'top-right', timeout: 5000 }} />
        </div>
      </Router>
    )
  }
}

export default withConsumer(Routes)
