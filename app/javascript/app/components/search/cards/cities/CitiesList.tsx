import * as React from 'react'
import { mapProps } from 'recompose'

import CityCheckbox from './CityCheckbox'

const CitiesList = ({ cities, setCities }) => (
  <div style={{ paddingLeft: 20 }}>
    {
      cities.map(city => (
        <CityCheckbox {...{city, setCities}} />
      ))
    }
  </div>
)

const enhance = mapProps(({ cities, query, setCities }) => ({
  setCities,
  cities: cities.filter(city => city.name.toLowerCase().startsWith(query.toLowerCase()))
}))

export default enhance(CitiesList)
