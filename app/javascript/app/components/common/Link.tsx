import * as React from 'react'
import { NavLink, NavItem, NavbarBrand } from 'reactstrap'
import { Link as RouteLink } from 'react-router-dom'

const NavItemLink = (props: any) => (
  <NavItem>
    <NavLink tag={RouteLink} {...props}>
      {props.children}
    </NavLink>
  </NavItem>
)

const NavbarBrandLink = (props: any) => (
  <NavbarBrand tag={RouteLink} {...props}>
    {props.children}
  </NavbarBrand>
)

export {
  NavItemLink,
  NavbarBrandLink,
}