import * as React from 'react'
import {
  Row,
  Col,
} from 'reactstrap'

import ProfileForm from '@components/users/ProfileForm'
import ConnectAccount from '@components/users/ConnectAccount'
import ChoosePage from '@components/users/ChoosePage'
import { Provider } from '@context/ProfileContext'
import { withConsumer } from '@context/MainContext'

interface Props {
  user: any
  setUser: any
}

class ProfileContainer extends React.Component<Props> {
  render() {
    return (
      <Provider
        user={this.props.user}
        setUser={this.props.setUser}
      >
        <Row>
          <Col md={4}></Col>
          <Col md={8}>
            <ProfileForm />
            <ConnectAccount />
            {/* <ChoosePage /> */}
          </Col>
        </Row>
      </Provider>
    )
  }
}

export default withConsumer(ProfileContainer)
