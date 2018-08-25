import * as React from 'react'

import LoginInstagram from '@components/account/LoginInstagram'
import GetImages from '@components/account/GetImages'
import PostsContainer from '@containers/posts/PostsContainer'
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

        <PostsContainer />
      </div>
    )
  }
}

export default withConsumer(DashboardContainer)