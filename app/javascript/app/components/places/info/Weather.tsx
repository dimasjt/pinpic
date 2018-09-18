import * as React from 'react'
import {
  Card,
  CardTitle,
  CardText,
} from 'reactstrap'
import { withStateHandlers, compose, branch, renderNothing, mapProps } from 'recompose'
import { graphql } from 'react-apollo'

import WeatherModal from '@components/modals/WeatherModal'
import placeWeatherQuery from '@gql/query/placeWeatherQuery'
import WeatherCard from '@components/weathers/WeatherCard'
import { withConsumer } from '@context/PlaceShowContext'

interface Props {
  toggle: any
  isOpen: boolean
  todayWeather: any
  weathers: any[]
}

const Weather: React.SFC<Props> = ({ toggle, isOpen, todayWeather, weathers }) => (
  <div>
    <Card body onClick={toggle}>
      <WeatherCard
        icon={todayWeather.icon}
        text={todayWeather.summary}
        time={todayWeather.time}
      />
    </Card>

    <WeatherModal {...{toggle, isOpen, weathers}} />
  </div>
)

const enhance = compose(
  withConsumer,
  withStateHandlers({
    isOpen: false,
  }, {
    toggle: ({ isOpen }) => () => ({ isOpen: !isOpen })
  }),
  graphql(placeWeatherQuery, {
    name: 'placeWeatherQuery',
    options: (props: any) => ({
      variables: { placeId: props.place.id }
    })
  }),
  branch(
    ({ placeWeatherQuery }) => placeWeatherQuery.loading,
    renderNothing,
  ),
  mapProps(({ place, placeWeatherQuery, isOpen, toggle }) => ({
    place,
    isOpen,
    toggle,
    weathers: placeWeatherQuery.placeWeather.daily,
    todayWeather: placeWeatherQuery.placeWeather.daily[0]
  }))
)

export default enhance(Weather)
