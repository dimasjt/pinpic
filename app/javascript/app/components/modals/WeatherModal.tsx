import * as React from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap'

import WeatherList from '@components/weathers/WeatherList';

const WeatherModal = ({ toggle, isOpen, weathers }) => (
  <Modal
    isOpen={isOpen}
    toggle={toggle}
    size="lg"
  >
    <ModalHeader toggle={toggle}>Place Weather</ModalHeader>
    <ModalBody>
      <WeatherList weathers={weathers} />
    </ModalBody>
    <ModalFooter>
      <Button onClick={toggle}>Close</Button>
    </ModalFooter>
  </Modal>
)

export default WeatherModal
