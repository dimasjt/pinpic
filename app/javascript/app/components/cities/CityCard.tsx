import * as React from 'react'
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from 'reactstrap'

import { City } from '@types'

const CityCard: React.SFC<City> = ({ name, image }) => (
  <Card>
    <CardImg src={image.fileUrl} alt={name} />
    <CardImgOverlay>
      <CardTitle>{name}</CardTitle>
    </CardImgOverlay>
  </Card>
)

export default CityCard
