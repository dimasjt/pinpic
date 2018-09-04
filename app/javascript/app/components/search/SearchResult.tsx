import * as React from 'react'
import {
  Row,
} from 'reactstrap'

import PlaceCard from '@components/places/PlaceCard'
import { withConsumer } from '@context/SearchContext'

const SearchResult = ({ places }) => (
  <Row>
    {
      places.map(place => (
        <PlaceCard
          key={place.id}
          place={place}
          size={{ md: 4 }}
        />
      ))
    }
  </Row>
)

export default withConsumer(SearchResult)
