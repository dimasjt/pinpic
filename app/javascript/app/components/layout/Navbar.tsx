import * as React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
} from 'reactstrap'
import styled from 'styled-components'

import { NavItemLink, NavbarBrandLink } from '@components/common/Link'
import LogoutLink from '@components/auth/LogoutLink'

interface Props {
  loggedIn: boolean
}

interface State {
  isOpen: boolean
}

const StyledNavbar = styled(Navbar)`
  background-color: #fff;
  box-shadow: 0 1px 3px 0 #eee;
`

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

  renderLogged = () => (
    <React.Fragment>
      <NavItemLink to="/search">
        Search
      </NavItemLink>
      <NavItemLink to="/dashboard">
        Dashboard
      </NavItemLink>
      <NavItemLink to="/places/new">
        Add Place
      </NavItemLink>
      <NavItemLink to="/wishlists">
        Wishlists
      </NavItemLink>
      <NavItemLink to="/profile">
        Profile
      </NavItemLink>
      <LogoutLink />
    </React.Fragment>
  )

  renderUnlogged = () => (
    <React.Fragment>
      <NavItemLink to="/login">
        Login
      </NavItemLink>
      <NavItemLink to="/register">
        Register
      </NavItemLink>
    </React.Fragment>
  )

  render() {
    return (
      <div>
        <StyledNavbar light expand="md" fixed="top">
          <div className="container">
            <NavbarBrandLink to="/">PinPic</NavbarBrandLink>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                { this.props.loggedIn ? this.renderLogged() : this.renderUnlogged() }
              </Nav>
            </Collapse>
          </div>
        </StyledNavbar>
      </div>
    )
  }
}

export default AppNavbar
