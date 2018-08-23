import * as React from 'react'
import { Router, Route } from 'react-router-dom'
import Alert from 'react-s-alert'

import HomeContainer from '@containers/HomeContainer'
import LoginContainer from '@containers/auth/LoginContainer'
import DashboardContainer from '@containers/dashboard/DashboardContainer'
import RegisterContainer from '@containers/auth/RegisterContainer'
import Navbar from '@components/layout/Navbar'

import { withConsumer } from '@context/MainContext'
import { MainContextProps } from '@types'
import history from '@utils/history'

class Routes extends React.Component<MainContextProps> {
  componentDidMount = () => {
    this.props.validateToken()
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar />

          <div className="container">
            <Route exact path="/" component={HomeContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/register" component={RegisterContainer} />
            <Route path="/dashboard" component={DashboardContainer} />
          </div>

          <Alert stack={{ limit: 5, effect: 'scale', position: 'top-right', timeout: 5000 }} />
        </div>
      </Router>
    )
  }
}

export default withConsumer(Routes)