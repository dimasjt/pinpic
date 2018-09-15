import * as React from 'react'
import Slider from 'react-slick'
import { compose, branch, withProps, renderComponent, mapProps } from 'recompose'
import { graphql } from 'react-apollo'

import CityCard from '@components/cities/CityCard'
import Loading from '@components/common/Loading';
import { City } from '@types'
import citiesQuery from '@gql/query/citiesQuery'

interface Props {
  cities: City[]
  settings: any
}

const CityList: React.SFC<Props> = ({ cities, settings }) => (
  <div>
    <h3>Popular Cities</h3>

    <Slider {...settings}>
      {
        cities.map(city => (
          <CityCard key={city.id} {...city} />
        ))
      }
    </Slider>
  </div>
)

const enhance = compose(
  graphql(citiesQuery, { name: 'citiesQuery'}),
  withProps({
    settings: {
      infinte: true,
      autoplay: false,
      slidesToShow: 4
    }
  }),
  branch(
    ({ citiesQuery }) => citiesQuery.loading,
    renderComponent(Loading),
  ),
  mapProps(({ settings, citiesQuery }) => ({
    settings,
    cities: citiesQuery.cities,
  }))
)

export default enhance(CityList)
