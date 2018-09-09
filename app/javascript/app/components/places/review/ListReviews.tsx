import * as React from 'react'

import Review from './Review'

const ListReviews = ({ reviews }) => (
  <div>
    {
      reviews.map(review => (
        <Review key={review.id} review={review} />
      ))
    }
  </div>
)

export default ListReviews
