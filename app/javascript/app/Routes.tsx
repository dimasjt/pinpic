import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeContainer from '@containers/HomeContainer'
import LoginContainer from '@containers/auth/LoginContainer'

const Routes = () => (
  <Router>
    <div className="container">
      <Route exact path="/" component={HomeContainer} />
      <Route path="/login" component={LoginContainer} />
    </div>
  </Router>
)

export default Routes