import * as React from 'react'
import {
  Container,
  Row,
  Col,
} from 'reactstrap'

import { Provider } from '@context/PlaceNewContext'
import PlaceNew from '@components/places/PlaceNew'

interface Props {
  match: any
}

class PlaceNewContainer extends React.Component<Props> {
  render() {
    return (
      <Provider>
        <Container>
          <PlaceNew />
        </Container>
      </Provider>
    )
  }
}

export default PlaceNewContainer
