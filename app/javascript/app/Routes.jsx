// @flow

import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeContainer from './containers/HomeContainer'

const Routes = () => (
  <Router>
    <Route exact path="/" component={HomeContainer} />
  </Router>
)

export default Routes