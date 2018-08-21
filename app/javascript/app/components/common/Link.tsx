import * as React from 'react'
import { NavLink, NavItem } from 'reactstrap'
import { Link as RouteLink } from 'react-router-dom'

const NavItemLink = (props: any) => (
  <NavItem>
    <NavLink tag={RouteLink} {...props}>
      {props.children}
    </NavLink>
  </NavItem>
)

export {
  NavItemLink,
}