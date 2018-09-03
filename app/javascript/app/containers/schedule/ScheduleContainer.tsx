import * as React from 'react'
import {
  Row,
  Col,
} from 'reactstrap'

import { Provider } from '@context/ScheduleContext'
import ListSchedules from '@components/schedule/ListSchedules'
import AddSchedule from '@components/schedule/AddSchedule'
import { withConsumer } from '@context/MainContext'

import { User } from '@types'

interface Props {
  user: User
}

class ScheduleContainer extends React.Component<Props> {
  render() {
    return (
      <Provider
        user={this.props.user}
      >
        <Row>
          <Col md={12}>
            <AddSchedule />
            <ListSchedules />
          </Col>
        </Row>
      </Provider>
    )
  }
}

export default withConsumer(ScheduleContainer)
