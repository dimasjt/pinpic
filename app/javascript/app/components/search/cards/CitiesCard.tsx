import * as React from 'react'
import { compose, branch, renderNothing, mapProps, withStateHandlers } from 'recompose'
import { graphql } from 'react-apollo'

import CollapseCard from '@components/cards/CollapseCard'
import CitiesList from './cities/CitiesList'
import SearchCity from './cities/SearchCity'
import citiesQuery from '@gql/query/citiesQuery'
import { withConsumer } from '@context/SearchContext'

import { City } from '@types'

interface CitiesCardProps {
  cities: City[]
  query: string
  setQuery(query: string): any
  setCities(cityId: string): any
}

const CitiesCard: React.SFC<CitiesCardProps> = ({ cities, query, setQuery, setCities }) => (
  <CollapseCard title="Select City">
    <SearchCity {...{query, setQuery}} />
    <CitiesList {...{query, cities, setCities}} />
  </CollapseCard>
)

const enhance = compose(
  withConsumer,
  graphql(citiesQuery, { name: 'citiesQuery' }),
  branch(
    ({ citiesQuery }) => citiesQuery.loading,
    renderNothing,
  ),
  mapProps(({ citiesQuery, ...rest }) => ({
    ...rest,
    cities: citiesQuery.cities
  })),
  withStateHandlers({
    query: '',
  }, {
    setQuery: () => (query) => ({ query })
  })
)

export default enhance(CitiesCard)
