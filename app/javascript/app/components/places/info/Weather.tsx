import * as React from 'react'
import {
  Card,
  CardTitle,
  CardText,
} from 'reactstrap'
import { withStateHandlers, compose } from 'recompose'

import WeatherModal from '@components/modals/WeatherModal'

interface Props {
  toggle: any
  isOpen: boolean
}

const Weather: React.SFC<Props> = ({ toggle, isOpen }) => (
  <div>
    <Card body onClick={toggle}>
      <CardTitle>Weather</CardTitle>
      <CardText>
        Sat-Sun Cloudly
      </CardText>
    </Card>

    <WeatherModal {...{toggle, isOpen}} />
  </div>
)

const enhance = compose(
  withStateHandlers({
    isOpen: false,
  }, {
    toggle: ({ isOpen }) => () => ({ isOpen: !isOpen })
  })
)

export default enhance(Weather)
