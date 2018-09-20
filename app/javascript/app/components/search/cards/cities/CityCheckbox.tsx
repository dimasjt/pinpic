import * as React from 'react'

import Checkbox from '@components/forms/Checkbox'

const CityCheckbox = ({ city, setCities }) => (
  <Checkbox
    key={city.id}
    label={city.name}
    onChange={(value) => setCities(value)}
    value={city.id}
  />
)

export default CityCheckbox
