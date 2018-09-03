import * as React from 'react'
import {
  Button
} from 'reactstrap'

import ModalSchedule from './ModalSchedule'
import { withConsumer } from '@context/ScheduleContext'

const AddSchedule = ({ newModalOpen, toggleModal, createSchedule }) => (
  <React.Fragment>
    <Button onClick={toggleModal}>
      New Schedule
    </Button>

    <ModalSchedule
      {...{
        toggleModal,
        createSchedule,
        isOpen: newModalOpen,
      }}
    />
  </React.Fragment>
)

export default withConsumer(AddSchedule)
