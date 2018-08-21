import * as React from 'react'
import {
  Row,
  Col,
} from 'reactstrap'

import LoginCard from '@components/auth/LoginCard'

const LoginContainer = () => (
  <Row>
    <Col md={{ size: 6, offset: 3 }}>
      <LoginCard />
    </Col>
  </Row>
)

export default LoginContainer