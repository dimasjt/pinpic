import * as React from "react"
import { Route, Redirect } from "react-router-dom"

import { withConsumer } from "@context/MainContext"

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )} />
  )
}

export default withConsumer(PrivateRoute)