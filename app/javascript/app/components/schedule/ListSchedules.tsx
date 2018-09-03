import * as React from 'react'
import {
  Table
} from 'reactstrap'

import { withConsumer } from '@context/ScheduleContext'

const ListSchedules = ({ schedules }) => (
  <Table striped hover responsive>
    <thead>
      <tr>
        <th>Photo</th>
        <th>Caption</th>
        <th>Accounts</th>
        <th>Publish At</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        schedules.map(schedule => (
          <tr key={schedule.id}>
            <td>
              <img src={schedule.medias[0].mediaUrl} alt={schedule.id} className="img-thumbnail" style={{width: 100}} />
            </td>
            <td>{schedule.caption}</td>
            <td>{ schedule.pages.map(page => <span key={page.id}>{page.name}</span>) }</td>
            <td>{schedule.publishAt}</td>
            <td>{schedule.status}</td>
            <td></td>
          </tr>
        ))
      }
    </tbody>
  </Table>
)

export default withConsumer(ListSchedules)
