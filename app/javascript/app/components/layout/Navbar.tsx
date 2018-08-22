import * as React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap'

import { NavItemLink } from '@components/common/Link'
import LogoutLink from '@components/auth/LogoutLink'

interface Props {}

interface State {
  isOpen: boolean
}

class AppNavbar extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <div className="container">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItemLink to="/">
                  Home
                </NavItemLink>
                <NavItemLink to="/login">
                  Login
                </NavItemLink>
                <NavItemLink to="/register">
                  Register
                </NavItemLink>
                <LogoutLink />
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default AppNavbar