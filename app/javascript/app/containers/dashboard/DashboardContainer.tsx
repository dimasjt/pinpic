import * as React from 'react'

import LoginInstagram from '@components/account/LoginInstagram'
import GetImages from '@components/account/GetImages'
import { withConsumer } from '@context/MainContext'

import { MainContextProps } from '@types'

class DashboardContainer extends React.Component<MainContextProps> {
  render() {
    const { user } = this.props

    return (
      <div>
        <h1>Dashboard</h1>

        { !user.connected && <LoginInstagram /> }
        { user.connected && <GetImages />}
      </div>
    )
  }
}

export default withConsumer(DashboardContainer)