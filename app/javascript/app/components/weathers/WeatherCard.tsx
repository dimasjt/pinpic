import * as React from 'react'
import * as moment from 'moment'

import WeatherIcon from '@components/common/WeatherIcon';
import styled from 'styled-components';

interface Props {
  icon: string
  text: string
  time: number
  style?: any
}

const Card = styled.div`
  width: 150px;
  height: 200px;
  margin: 5px;
  flex: 0 0 auto;
  text-align: center;
  transition: 0.5;
  padding: 5px;

  &:hover {
    border: 1px solid #ccc;
  }
`

const WeatherCard: React.SFC<Props> = ({ icon, text, time, style }) => (
  <Card style={style}>
    <WeatherIcon icon={icon} />
    <p>{text}</p>
    <small className="text-muted">{moment.unix(time).format('ll')}</small>
  </Card>
)

export default WeatherCard
