import * as React from 'react'
import Icon from 'react-icons-weather'

interface Props {
  icon: string
}

const WeatherIcon: React.SFC<Props> = ({ icon }) => (
  <div style={{ textAlign: 'center' }}>
    <Icon
      name="darksky"
      iconId={icon}
      flip="horizontal"
      rotate="90"
      style={{ fontSize: 40 }}
    />
  </div>
)

export default WeatherIcon
