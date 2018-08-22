import * as React from 'react'
import {
  Row,
  Col,
} from 'reactstrap'

import RegisterCard from '@components/auth/RegisterCard'

const RegisterContainer = () => (
  <Row>
    <Col md={{ size: 6, offset: 3 }}>
      <RegisterCard />
    </Col>
  </Row>
)

export default RegisterContainer