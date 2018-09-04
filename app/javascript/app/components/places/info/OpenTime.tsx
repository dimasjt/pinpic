import * as React from 'react'
import {
  Card,
  CardTitle,
  CardText,
} from 'reactstrap'

const OpenTime = () => (
  <Card body>
    <CardTitle>Open Time</CardTitle>
    <CardText>
      Mon-Frid 10:00 - 21:00
      Sat-Sun 08:00 - 23:00
    </CardText>
  </Card>
)

export default OpenTime
