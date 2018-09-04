import * as React from 'react'
import { compose, withProps } from 'recompose'
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps"

import { withConsumer } from '@context/PlaceShowContext'

const key = process.env.GOOGLE_API_KEY

const PlaceMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=${key}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(({ place }) => (
  <GoogleMap defaultCenter={place.location}>
    <Marker position={place.location} />
  </GoogleMap>
))

export default withConsumer(PlaceMap)
