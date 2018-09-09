import * as React from 'react'

import ListReviews from './ListReviews'
import NewReview from './NewReview'
import { withConsumer } from '@context/PlaceShowContext'

const PlaceReviews = ({ place, createReview }) => (
  <div>
    <h3>Reviews</h3>
    <ListReviews reviews={place.reviews} />
    <NewReview createReview={createReview} place={place} />
  </div>
)

export default withConsumer(PlaceReviews)
