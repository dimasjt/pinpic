import * as React from 'react'
import {
  NavItem,
  NavLink
} from 'reactstrap'

import { withConsumer } from '@context/MainContext'

const LogoutLink = ({ logoutUser }) => (
  <NavItem>
    <NavLink href="javascript:void(0)" onClick={() => logoutUser()}>
      Logout
    </NavLink>
  </NavItem>
)

export default withConsumer(LogoutLink)