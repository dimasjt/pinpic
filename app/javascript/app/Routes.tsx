import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeContainer from '@containers/HomeContainer'
import LoginContainer from '@containers/auth/LoginContainer'
import DashboardContainer from '@containers/dashboard/DashboardContainer'

import Navbar from '@components/layout/Navbar'

const Routes = () => (
  <Router>
    <div>
      <Navbar />

      <div className="container">
        <Route exact path="/" component={HomeContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/dashboard" component={DashboardContainer} />
      </div>
    </div>
  </Router>
)

export default Routes