import * as React from 'react'
import ReactRating from 'react-rating'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

const Rating = (props) => (
  <ReactRating
    emptySymbol={<IoIosStarOutline size={props.size} />}
    fullSymbol={<IoIosStar size={props.size} />}
    {...props}
  />
)

export default Rating
