import * as React from 'react'

import PlaceBreadcrumbs from './PlaceBreadcrumb'
import { withConsumer } from '@context/PlaceShowContext'

import { Place } from '@types'

const PlaceDescription = ({ place }) => (
  <div>
    <p>
      {place.description}
    </p>
  </div>
)

export default withConsumer(PlaceDescription)
