import * as React from 'react'
import {
  Row,
} from 'reactstrap'
import { compose, lifecycle } from 'recompose'

import PlaceCard from '@components/places/PlaceCard'
import { withConsumer } from '@context/SearchContext'

import { Place } from '@types'

interface SearchResultProps {
  places: Place[]
}

const SearchResult: React.SFC<SearchResultProps> = ({ places }) => (
  <Row>
    {
      places.map(place => (
        <PlaceCard
          key={place.id}
          place={place}
          size={{ md: 12 }}
        />
      ))
    }
  </Row>
)

const enhance = compose(
  withConsumer,
  lifecycle({
    shouldComponentUpdate<SearchResultProps>(nextProps) {
      return nextProps.places !== this.props.places
    }
  })
)

export default enhance(SearchResult)
