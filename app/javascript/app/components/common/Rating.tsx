import * as React from 'react'
import ReactRating from 'react-rating'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

const Rating = (props) => (
  <ReactRating
    emptySymbol={<IoIosStarOutline size={20} />}
    fullSymbol={<IoIosStar size={20} />}
    {...props}
  />
)

export default Rating
