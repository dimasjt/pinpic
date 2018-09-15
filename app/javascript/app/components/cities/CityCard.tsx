import * as React from 'react'
import {
  Card,
  CardImg,
} from 'reactstrap'

import { City } from '@types'

const CityCard: React.SFC<City> = ({ name }) => (
  <Card>
    <div>{name}</div>
    {/* <CardImg /> */}
  </Card>
)

export default CityCard
