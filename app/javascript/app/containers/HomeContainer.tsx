import * as React from 'react'
import {
  Container
} from 'reactstrap'

import TagList from '@components/home/TagList'
import CityList from '@components/home/CityList';

const HomeContainer: React.SFC<{}> = () => (
  <Container>
    <TagList />
    <CityList />
  </Container>
)

export default HomeContainer
