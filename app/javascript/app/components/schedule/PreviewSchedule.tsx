import * as React from 'react'
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardText,
} from 'reactstrap'

import { withConsumer } from '@context/ScheduleContext'

const PreviewSchedule = ({ scheduleForm }) => (
  <Col md={6}>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://via.placeholder.com/500x400"
        alt="preview"
      />
      <CardBody>
        <CardText>
          {scheduleForm.caption || 'caption here...'}
        </CardText>
      </CardBody>
    </Card>
  </Col>
)

export default withConsumer(PreviewSchedule)
