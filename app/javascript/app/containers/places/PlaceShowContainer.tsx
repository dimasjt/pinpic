import * as React from 'react'
import {
  Container,
  Row,
  Col,
} from 'reactstrap'

import PlaceHero from '@components/places/PlaceHero'
import PlaceDescription from '@components/places/PlaceDescription'
import PlaceMap from '@components/places/PlaceMap'
import PlaceInfo from '@components/places/PlaceInfo'
import PlaceShare from '@components/places/PlaceShare'
import PlaceBreadcrumb from '@components/places/PlaceBreadcrumb'
import PlaceGallery from '@components/places/PlaceGallery'
import PlaceReviews from '@components/places/review/PlaceReviews'
import { Provider } from '@context/PlaceShowContext'

interface Props {
  match: any
}

class PlaceShowContainer extends React.Component<Props> {
  render() {
    return (
      <Provider
        params={this.props.match.params}
      >
        <PlaceHero />
        <Container style={{ paddingTop: 50 }}>
          <Row>
            <Col md={8}>
              <PlaceBreadcrumb />
              <PlaceInfo />
              <PlaceDescription />
              <PlaceGallery />
              <PlaceMap />
              <PlaceReviews />
            </Col>
            <Col md={4}>
              <PlaceShare />
              {/* add whitelist */}
            </Col>
          </Row>
        </Container>
      </Provider>
    )
  }
}

export default PlaceShowContainer
