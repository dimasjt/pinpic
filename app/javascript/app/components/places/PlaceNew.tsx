import * as React from 'react'

import PlaceForm from './form/PlaceForm';
import { withConsumer } from '@context/PlaceNewContext'

const PlaceNew = ({ placeForm, tags, cities, onChange, onSubmit, onDrop }) => (
  <PlaceForm
    onSubmit={onSubmit}
    onChange={onChange}
    place={placeForm}
    tags={tags}
    cities={cities}
    onDrop={onDrop}
  />
)

export default withConsumer(PlaceNew)
