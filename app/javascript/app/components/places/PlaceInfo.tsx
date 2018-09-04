import * as React from 'react'
import {
  Row,
  Col,
} from 'reactstrap'

import OpenTime from './info/OpenTime'
import Weather from './info/Weather'
import Ticket from './info/Ticket'

const PlaceInfo = () => (
  <Row>
    <Col md={4}>
      <OpenTime />
    </Col>
    <Col md={4}>
      <Weather />
    </Col>
    <Col md={4}>
      <Ticket />
    </Col>
  </Row>
)

export default PlaceInfo
