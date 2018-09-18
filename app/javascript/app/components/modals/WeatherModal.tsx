import * as React from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap'

const WeatherModal = ({ toggle, isOpen }) => (
  <Modal
    isOpen={isOpen}
    toggle={toggle}
    size="lg"
  >
    <ModalHeader toggle={toggle}>Place Weather</ModalHeader>
    <ModalBody>
      lorem
    </ModalBody>
    <ModalFooter>
      <Button onClick={toggle}>Close</Button>
    </ModalFooter>
  </Modal>
)

export default WeatherModal
