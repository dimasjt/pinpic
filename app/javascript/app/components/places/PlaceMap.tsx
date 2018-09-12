import * as React from 'react'
import { compose, withProps } from 'recompose'
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps'

import { withConsumer } from '@context/PlaceShowContext'
import { Place } from '@types'

const key = process.env.GOOGLE_API_KEY

interface Props {
  place: Place
}

const PlaceMap: React.StatelessComponent<Props> = ({ place }) => (
  <div style={{ padding: '10px 0' }}>
    <h3>Location</h3>
    <div>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: place.location.lat, lng: place.location.lng }}
      >
        <Marker position={place.location} />
      </GoogleMap>
    </div>
  </div>
)

const enhance = compose(
  withConsumer,
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=${key}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)

export default enhance(PlaceMap)
