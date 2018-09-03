import * as React from 'react'

import { withConsumer } from '@context/MainContext'

import { MainContextProps } from '@types'

class DashboardContainer extends React.Component<MainContextProps> {
  render() {
    const { user } = this.props

    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    )
  }
}

export default withConsumer(DashboardContainer)
