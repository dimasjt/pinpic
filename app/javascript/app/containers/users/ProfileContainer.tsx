import * as React from 'react'
import {
  Row,
  Col,
} from 'reactstrap'

import { withConsumer } from '@context/MainContext'

interface Props {
  user: any
  setUser: any
}

class ProfileContainer extends React.Component<Props> {
  render() {
    return (
      <Row>
        <Col md={4}></Col>
        <Col md={8}>
        </Col>
      </Row>
    )
  }
}

export default withConsumer(ProfileContainer)
