import * as React from 'react'

import Rating from '@components/common/Rating'

const Review = ({ review }) => (
  <div style={{ display: 'flex', marginBottom: 20 }}>
    <div style={{ marginRight: 10 }}>
      <img
        src={review.user.avatar.thumb}
        alt={review.user.firstName}
        style={{ width: 60, height: 60, borderRadius: '50%' }}
      />
    </div>
    <div style={{ borderBottom: '1px solid rgb(223, 223, 223)' }}>
      <h5>{review.user.firstName} {review.user.lastName}</h5>
      <Rating initialRating={review.rating} size={16} readonly />
      <p>
        {review.message}
      </p>
    </div>
  </div>
)

export default Review
