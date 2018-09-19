import * as React from 'react'
import { compose, branch, renderNothing, mapProps } from 'recompose'
import { graphql } from 'react-apollo'

import CollapseCard from '@components/cards/CollapseCard'
import Checkbox from '@components/forms/Checkbox'
import citiesQuery from '@gql/query/citiesQuery'

import { City } from '@types'

interface CitiesCardProps {
  cities: City[]
}

const CitiesCard: React.SFC<CitiesCardProps> = ({ cities }) => (
  <CollapseCard title="Select City">
    <div style={{ paddingLeft: 20 }}>
      {
        cities.map(city => (
          <Checkbox
            key={city.id}
            label={city.name}
            onChange={(value) => console.log('value', value)}
            value={city.id}
          />
        ))
      }
    </div>
  </CollapseCard>
)

const enhance = compose(
  graphql(citiesQuery, { name: 'citiesQuery' }),
  branch(
    ({ citiesQuery }) => citiesQuery.loading,
    renderNothing,
  ),
  mapProps(({ citiesQuery }) => ({
    cities: citiesQuery.cities
  }))
)

export default enhance(CitiesCard)
