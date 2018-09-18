import * as React from 'react'

import WeatherCard from './WeatherCard';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
`

const WeatherList = ({ weathers }) => (
  <List>
    {
      weathers.map(weather => (
        <WeatherCard
          icon={weather.icon}
          text={weather.summary}
          time={weather.time}
        />
      ))
    }
  </List>
)

export default WeatherList
