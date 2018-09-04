import * as React from 'react'
import styledComponents from 'styled-components'
import styledComponentsTS from 'styled-components-ts'

import { withConsumer } from '@context/PlaceShowContext'

import { Place } from '@types'

interface PlaceHeroProps {
  backgroundImage: string
  place: Place
}

const PlaceHero = styledComponentsTS<PlaceHeroProps>(styledComponents.div) `
  background-image: ${({ place }) => `url(${place.images[0].fileUrl})`};
  height: 500px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

export default withConsumer(PlaceHero)
