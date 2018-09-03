import * as React from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Button,
} from 'reactstrap'
import PreviewSchedule from './PreviewSchedule'
import ScheduleForm from './ScheduleForm'

const ModalSchedule = ({ isOpen, toggleModal, createSchedule }) => (
  <Modal isOpen={isOpen} size="lg">
    <ModalHeader toggle={toggleModal}>
      Add Schedule
    </ModalHeader>
    <ModalBody>
      <Row>
        <PreviewSchedule />
        <ScheduleForm />
      </Row>
    </ModalBody>
    <ModalFooter>
      <Button onClick={toggleModal}>
        Cancel
      </Button>
      <Button color="primary" onClick={createSchedule}>
        Save
      </Button>
    </ModalFooter>
  </Modal>
)

export default ModalSchedule
