import * as React from 'react'

import LoginInstagram from '@components/account/LoginInstagram'

class DashboardContainer extends React.Component<{}> {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>

        <LoginInstagram />
      </div>
    )
  }
}

export default DashboardContainer